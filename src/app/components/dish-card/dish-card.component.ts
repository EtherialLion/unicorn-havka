import {Component, Input} from '@angular/core';
import {Dish} from "../../shared/interfaces/dish";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink]
})

export class DishCardComponent {
  @Input() dish?: Dish;
}
