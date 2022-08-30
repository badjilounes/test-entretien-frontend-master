import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

import { AddressDetails } from 'src/app/core/api/server/data.interface';
import { AddressPipeModule } from '../../../../shared/business/pipes/address-pipe.module';
import { AddressesPageStore } from '../../addresses-page.store';
import { AddressesListDataSource } from './addresses-list-datasource';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AddressPipeModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AddressesListComponent implements OnChanges {
  @Input() addresses: AddressDetails[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AddressDetails>;

  dataSource: AddressesListDataSource = new AddressesListDataSource();

  displayedColumns = ['nom', 'address', 'active', 'actions'];

  constructor(private readonly store: AddressesPageStore) {}

  ngOnChanges(): void {
    this.dataSource = new AddressesListDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.addresses;

    if (this.table) {
      this.table.dataSource = this.dataSource;
    }
  }

  editAddress(address: AddressDetails) {
    this.store.openCreateOrEditAddressDialog(address);
  }
}
