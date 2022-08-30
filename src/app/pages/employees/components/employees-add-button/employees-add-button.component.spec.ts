import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAddButtonComponent } from './employees-add-button.component';

describe('EmployeesAddButtonComponent', () => {
  let component: EmployeesAddButtonComponent;
  let fixture: ComponentFixture<EmployeesAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
