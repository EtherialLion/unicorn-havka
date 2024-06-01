import { Injectable } from '@angular/core';
import dishesApi from '../../shared/fake-api/dishes.json';
import ingredientsApi from '../../shared/fake-api/ingredients.json';
import {Dish} from "../interfaces/dish";
import {Ingredient} from "../interfaces/ingridient";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() {

  }

  getDishes(): Dish[] {
    return dishesApi.data
  }

  getDish(id: string): Dish | undefined {
    return dishesApi.data.find(d => d.id === id);
  }

  getIngredients(): Ingredient[] {
    return ingredientsApi.data
  }

}
