import {Component, OnInit} from '@angular/core';
import {DishService} from "../../shared/services/dish.service";
import {Dish} from "../../shared/interfaces/dish";
import {DishCardComponent} from "../dish-card/dish-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-components',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss',
  standalone: true,
  imports: [DishCardComponent, CommonModule]
})

export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    console.log(this.dishes);
  }

}
