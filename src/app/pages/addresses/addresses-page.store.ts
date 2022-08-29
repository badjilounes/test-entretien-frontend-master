import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AddressDetails } from 'src/app/shared/technical/api/server/data.interface';
import { AddressHttpService } from 'src/app/shared/technical/api/services/address-http.service';

type AddressesPageStoreState = {
  addresses: AddressDetails[];
};

@Injectable()
export class AddressesPageStore extends ComponentStore<AddressesPageStoreState> {
  readonly addresses$: Observable<AddressDetails[]> = this.select(
    (state) => state.addresses
  );

  constructor(private readonly addressHttpService: AddressHttpService) {
    super({
      addresses: [],
    });
  }

  readonly getAddressList = this.effect((save$: Observable<void>) => {
    return save$.pipe(
      switchMap(() => this.addressHttpService.getAddressList()),
      tap((addresses: AddressDetails[]) =>
        this.patchState(() => ({ addresses }))
      )
    );
  });
}
