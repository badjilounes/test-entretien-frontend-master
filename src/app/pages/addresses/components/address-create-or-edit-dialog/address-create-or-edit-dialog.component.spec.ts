import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCreateOrEditDialogComponent } from './address-create-or-edit-dialog.component';

describe('AddressCreateOrEditDialogComponent', () => {
  let component: AddressCreateOrEditDialogComponent;
  let fixture: ComponentFixture<AddressCreateOrEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressCreateOrEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressCreateOrEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
