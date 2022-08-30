import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmployeesPageStore } from '../../employees-page.store';

@Component({
  selector: 'app-employees-add-button',
  templateUrl: './employees-add-button.component.html',
  styleUrls: ['./employees-add-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule],
})
export class EmployeesAddButtonComponent {
  constructor(private readonly store: EmployeesPageStore) {}

  createEmployee() {
    this.store.openCreateOrEditEmployeeDialog();
  }
}
