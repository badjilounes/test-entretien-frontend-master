import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { AddressDetails } from 'src/app/core/api/server/data.interface';
import { AddressHttpService } from 'src/app/core/api/services/address-http.service';
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
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) {
    super({
      addresses: [],
    });
  }

  readonly createAddress = this.effect((save$: Observable<AddressDetails>) => {
    return save$.pipe(
      switchMap((address) => this.addressHttpService.createAddress(address)),
      tap(() => this.get().dialogRef?.close({ refresh: true })),
      tap((address: AddressDetails) =>
        this.snackBar.open(`L'adresse "${address.nom}" a été ajoutée`, 'OK', {
          duration: 2000,
        })
      ),
      catchError((error) => {
        this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
        return EMPTY;
      })
    );
  });

  readonly editAddress = this.effect((save$: Observable<AddressDetails>) => {
    return save$.pipe(
      switchMap((address) => this.addressHttpService.editAddress(address)),
      tap(() => this.get().dialogRef?.close({ refresh: true })),
      tap((address: AddressDetails) =>
        this.snackBar.open(`L'adresse "${address.nom}" a été modifiée`, 'OK', {
          duration: 2000,
        })
      ),
      catchError((error) => {
        this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
        return EMPTY;
      })
    );
  });

  readonly getAddressList = this.effect((save$: Observable<void>) => {
    return save$.pipe(
      switchMap(() => this.addressHttpService.getSuccursalAddressList()),
      tap((addresses: AddressDetails[]) =>
        this.patchState(() => ({ addresses }))
      ),
      catchError((error) => {
        this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
        return EMPTY;
      })
    );
  });

  readonly openCreateOrEditAddressDialog = this.effect(
    (save$: Observable<AddressDetails | void>) => {
      return save$.pipe(
        map((address: AddressDetails | void) =>
          this.dialog.open(AddressCreateOrEditDialogComponent, {
            width: '500px',
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
