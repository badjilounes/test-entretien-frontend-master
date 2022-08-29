import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AddressesPageStore } from './addresses-page.store';

import { AddressesRoutingModule } from './addresses-routing.module';

@NgModule({
  imports: [CommonModule, AddressesRoutingModule, MatDialogModule],
  providers: [AddressesPageStore],
})
export class AddressesModule {}
