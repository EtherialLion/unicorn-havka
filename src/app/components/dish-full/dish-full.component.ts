import {Component, DestroyRef, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Dish} from "../../shared/interfaces/dish";
import {DishService} from "../../shared/services/dish.service";
import {CommonModule, JsonPipe} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Ingredient} from "../../shared/interfaces/ingridient";

@Component({
  selector: 'app-dish-full',
  templateUrl: './dish-full.component.html',
  styleUrl: './dish-full.component.scss',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    RouterLink
  ]
})
export class DishFullComponent implements OnInit {
  dish?: Dish;
  activeLink: string = 'Ingredients';
  ingredients: Ingredient[] = [];

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        if (params['id']) {
          this.getDishById(params['id']);
          this.getIngredients();
          console.log(this.ingredients);
        }
      });
  }

  getDishById(id: string): void {
    this.dish = this.dishService.getDish(id);
  }

  changeLink(link: string): void {
    this.activeLink = link;
  }

  getIngredients(): void {
    const allIngredients = this.dishService.getIngredients();

    if (this.dish?.ingredients) {
      this.ingredients = this.dish.ingredients.map(item => {
        const found = allIngredients.find(ing => ing.id === item.id);
        if (found) {
          return {
            id: item.id,
            qty: item.qty,
            name: found.name,
            image: found.image,
          }
        } else {
          return item
        }
      })
    }
  }

}
