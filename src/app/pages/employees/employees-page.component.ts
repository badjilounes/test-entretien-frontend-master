import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/core/api/server/data.interface';
import { EmployeesAddButtonComponent } from './components/employees-add-button/employees-add-button.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesPageStore } from './employees-page.store';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  standalone: true,
  imports: [
    EmployeesAddButtonComponent,
    CommonModule,
    LetModule,
    EmployeesListComponent,
  ],
})
export class EmployeesPageComponent implements OnInit {
  employees$: Observable<EmployeeDetails[]> = this.store.employees$;

  constructor(private readonly store: EmployeesPageStore) {}

  ngOnInit(): void {
    this.store.getEmployeeList();
  }
}
