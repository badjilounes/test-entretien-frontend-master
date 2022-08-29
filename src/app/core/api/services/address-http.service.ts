import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddressDetails } from '../server/data.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressHttpService {
  constructor(private http: HttpClient) {}

  getSuccursalAddressList(): Observable<AddressDetails[]> {
    return this.http
      .get<{ addresses: AddressDetails[] }>(`/api/address/succursal`)
      .pipe(map(({ addresses }) => addresses));
  }

  createAddress(
    address: Omit<AddressDetails, 'id'>
  ): Observable<AddressDetails> {
    return this.http
      .post<{ address: AddressDetails }>(`/api/address`, address)
      .pipe(map(({ address }) => address));
  }

  editAddress(address: AddressDetails): Observable<AddressDetails> {
    return this.http
      .put<{ address: AddressDetails }>(`/api/address/${address.id}`, address)
      .pipe(map(({ address }) => address));
  }
}
