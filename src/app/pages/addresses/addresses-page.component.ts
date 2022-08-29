import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LetModule } from '@ngrx/component';
import { filter, Observable, tap } from 'rxjs';
import { AddressDetails } from 'src/app/shared/technical/api/server/data.interface';
import { AddressesPageStore } from './addresses-page.store';
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
    MatDialogModule,
    AddressCreateOrEditDialogComponent,
  ],
})
export class AddressesPageComponent implements OnInit {
  addresses$: Observable<AddressDetails[]> = this.store.addresses$;

  constructor(
    private readonly store: AddressesPageStore,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.getAddressList();
  }

  createAddress() {
    const dialogRef = this.dialog.open(AddressCreateOrEditDialogComponent, {
      minWidth: 400,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => result?.refresh),
        tap(() => this.store.getAddressList()),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
