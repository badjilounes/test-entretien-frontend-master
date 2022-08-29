import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AddressDetails } from 'src/app/shared/server/data.interface';
import { AddressHttpService } from 'src/app/shared/services/address-http.service';


type AddressesPageStoreState = {
  addresses: AddressDetails[];
};

@Injectable()
export class AddressesPageStore extends ComponentStore<AddressesPageStoreState> {

  readonly addresses$: Observable<AddressDetails[]> = this.select(
    (state) => state.addresses,
  );

  constructor(
    private readonly addressHttpService: AddressHttpService,
  ) {
    super({
      addresses: []
    });
  }

  readonly getAddressList = this.effect((save$: Observable<void>) => {
    return save$.pipe(
      switchMap(() => this.addressHttpService.getAddressList()),
      tap((addresses: AddressDetails[]) => this.patchState(() => ({ addresses }))),
    );
  });

}
