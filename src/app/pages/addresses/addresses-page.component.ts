import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { AddressDetails } from 'src/app/shared/server/data.interface';
import { AddressesPageStore } from './addresses-page.store';
import { AddressesListComponent } from './components/addresses-list/addresses-list.component';

@Component({
  selector: 'app-addresses-page',
  templateUrl: './addresses-page.component.html',
  styleUrls: ['./addresses-page.component.scss'],
  standalone: true,
  providers: [AddressesPageStore],
  imports: [
    CommonModule,
    AddressesListComponent,
    LetModule,
  ]
})
export class AddressesPageComponent implements OnInit {

  addresses$: Observable<AddressDetails[]> = this.store.addresses$;

  constructor(private readonly store: AddressesPageStore) { }

  ngOnInit(): void {
    this.store.getAddressList();
  }

}
