import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './employees-page.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    EmployeesPageComponent,
  ]
})
export class EmployeesModule { }
