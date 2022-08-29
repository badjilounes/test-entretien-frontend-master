import { Pipe, PipeTransform } from '@angular/core';
import { AddressDetails } from 'src/app/core/api/server/data.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: AddressDetails): string {
    return [
      address.numero,
      address.rue,
      address.ville,
      address.zip,
      address.ville,
    ].join(' ');
  }
}
