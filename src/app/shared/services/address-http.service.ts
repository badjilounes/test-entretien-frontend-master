import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AddressDetails } from '../server/data.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressHttpService {
  constructor(private http: HttpClient) {}

  getAddressList(): Observable<AddressDetails[]> {
    return this.http.get<{addresses: AddressDetails[]}>(`/api/address`).pipe(
      map(({ addresses }) => addresses),
    );
  }

  addAddress(address: AddressDetails): Observable<AddressDetails> {
    return this.http.post<{response: AddressDetails}>(`/api/address`, address).pipe(
      map(({ response }) => response),
    );;
  }
}
