import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AddressDetails } from 'src/app/shared/technical/api/server/data.interface';
import { AddressHttpService } from 'src/app/shared/technical/api/services/address-http.service';
import { AddressCreateOrEditDialogComponent } from './components/address-create-or-edit-dialog/address-create-or-edit-dialog.component';

type AddressesPageStoreState = {
  addresses: AddressDetails[];
  dialogRef?: MatDialogRef<AddressCreateOrEditDialogComponent>;
};

@Injectable()
export class AddressesPageStore extends ComponentStore<AddressesPageStoreState> {
  readonly addresses$: Observable<AddressDetails[]> = this.select(
    (state) => state.addresses
  );

  constructor(
    private readonly addressHttpService: AddressHttpService,
    private readonly dialog: MatDialog
  ) {
    super({
      addresses: [],
    });
  }

  readonly createAddress = this.effect((save$: Observable<AddressDetails>) => {
    return save$.pipe(
      switchMap((address) => this.addressHttpService.createAddress(address)),
      tap(() => this.get().dialogRef?.close({ refresh: true }))
    );
  });

  readonly editAddress = this.effect((save$: Observable<AddressDetails>) => {
    return save$.pipe(
      switchMap((address) => this.addressHttpService.editAddress(address)),
      tap(() => this.get().dialogRef?.close({ refresh: true }))
    );
  });

  readonly getAddressList = this.effect((save$: Observable<void>) => {
    return save$.pipe(
      switchMap(() => this.addressHttpService.getAddressList()),
      tap((addresses: AddressDetails[]) =>
        this.patchState(() => ({ addresses }))
      )
    );
  });

  readonly openCreateOrEditAddressDialog = this.effect(
    (save$: Observable<AddressDetails | void>) => {
      return save$.pipe(
        map((address: AddressDetails | void) =>
          this.dialog.open(AddressCreateOrEditDialogComponent, {
            minWidth: 400,
            data: address,
          })
        ),
        tap((dialogRef) => this.patchState(() => ({ dialogRef }))),
        switchMap((dialogRef) => dialogRef.afterClosed()),
        filter((result) => result?.refresh),
        tap(() => this.getAddressList())
      );
    }
  );
}
