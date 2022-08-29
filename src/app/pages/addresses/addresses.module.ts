import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesPageComponent } from './addresses-page.component';
import { AddressPipe } from './pipes/address.pipe';


@NgModule({
  imports: [
    CommonModule,
    AddressesRoutingModule,
  ],
})
export class AddressesModule { }
