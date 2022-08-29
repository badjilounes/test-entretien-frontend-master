import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesPageComponent } from './addresses-page.component';

describe('AddressesComponent', () => {
  let component: AddressesPageComponent;
  let fixture: ComponentFixture<AddressesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
