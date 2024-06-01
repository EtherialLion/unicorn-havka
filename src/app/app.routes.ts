import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full'},
  {
    path: 'dishes',
    loadComponent:()=> import('./components/dishes/dishes.component').then(c=> c.DishesComponent)
  },
  {
    path: 'dish/:id',
    loadComponent:()=> import('./components/dish-full/dish-full.component').then(c=> c.DishFullComponent)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
