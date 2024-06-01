import {Ingredient} from "./ingridient";

export interface Dish {
  id: string;
  image: string;
  name: string;
  description?: string;
  time: number;
  rating: number;
  price: number;
  calories: number;
  ingredients: Ingredient[];
  instructions: string;
}

