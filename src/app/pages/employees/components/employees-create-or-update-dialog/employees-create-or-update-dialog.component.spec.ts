import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCreateOrUpdateDialogComponent } from './employees-create-or-update-dialog.component';

describe('EmployeesCreateOrUpdateDialogComponent', () => {
  let component: EmployeesCreateOrUpdateDialogComponent;
  let fixture: ComponentFixture<EmployeesCreateOrUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesCreateOrUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCreateOrUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
