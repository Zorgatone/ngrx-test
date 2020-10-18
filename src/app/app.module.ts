import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/atomic/atoms/checkbox/checkbox.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    CheckboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule.forRoot(reducers, {
      metaReducers
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
