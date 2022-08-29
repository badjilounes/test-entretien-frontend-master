import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AddressesPageStore } from '../../addresses-page.store';

@UntilDestroy()
@Component({
  selector: 'app-address-add-button',
  templateUrl: './address-add-button.component.html',
  styleUrls: ['./address-add-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule],
})
export class AddressAddButtonComponent {
  constructor(private readonly store: AddressesPageStore) {}

  createAddress() {
    this.store.openCreateOrEditAddressDialog();
  }
}
