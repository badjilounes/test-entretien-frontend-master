import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UntilDestroy } from '@ngneat/until-destroy';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { AddressDetails } from 'src/app/shared/technical/api/server/data.interface';
import { AddressesPageStore } from './addresses-page.store';
import { AddressAddButtonComponent } from './components/address-add-button/address-add-button.component';
import { AddressCreateOrEditDialogComponent } from './components/address-create-or-edit-dialog/address-create-or-edit-dialog.component';
import { AddressesListComponent } from './components/addresses-list/addresses-list.component';

@UntilDestroy()
@Component({
  templateUrl: './addresses-page.component.html',
  styleUrls: ['./addresses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    AddressesListComponent,
    MatButtonModule,
    LetModule,
    AddressCreateOrEditDialogComponent,
    AddressAddButtonComponent,
  ],
})
export class AddressesPageComponent implements OnInit {
  addresses$: Observable<AddressDetails[]> = this.store.addresses$;

  constructor(private readonly store: AddressesPageStore) {}

  ngOnInit(): void {
    this.store.getAddressList();
  }
}
