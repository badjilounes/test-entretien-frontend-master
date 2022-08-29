import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressesPageStore } from './addresses-page.store';

import { AddressesRoutingModule } from './addresses-routing.module';

@NgModule({
  imports: [CommonModule, AddressesRoutingModule],
  providers: [AddressesPageStore],
})
export class AddressesModule {}
