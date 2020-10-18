import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { TodoPageComponent } from '../pages/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
