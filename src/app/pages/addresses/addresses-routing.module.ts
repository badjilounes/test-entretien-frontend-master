import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesPageComponent } from './addresses-page.component';

const routes: Routes = [{ path: '', component: AddressesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressesRoutingModule { }
