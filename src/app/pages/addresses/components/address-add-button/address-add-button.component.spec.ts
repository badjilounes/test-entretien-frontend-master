import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAddButtonComponent } from './address-add-button.component';

describe('AddressAddButtonComponent', () => {
  let component: AddressAddButtonComponent;
  let fixture: ComponentFixture<AddressAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
