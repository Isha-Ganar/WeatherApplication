import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCrudComponent } from './car-crud/car-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsViewComponent } from './cars-view/cars-view.component';

@NgModule({
  declarations: [
    CarCrudComponent,
    CarsViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CarCrudComponent,
    CarsViewComponent
  ]
})
export class SharedModule { }
