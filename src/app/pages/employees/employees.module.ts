import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeesPageStore } from './employees-page.store';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [EmployeesPageStore],
})
export class EmployeesModule {}
