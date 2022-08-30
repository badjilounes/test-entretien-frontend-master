import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-create-or-update-dialog',
  templateUrl: './employees-create-or-update-dialog.component.html',
  styleUrls: ['./employees-create-or-update-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmployeesCreateOrUpdateDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
