import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { AddressDetails } from 'src/app/shared/server/data.interface';
import { AddressPipeModule } from '../../pipes/address-pipe.module';
import { AddressesListDataSource } from './addresses-list-datasource';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AddressPipeModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AddressesListComponent implements AfterViewInit, OnChanges {

  @Input() addresses: AddressDetails[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AddressDetails>;

  dataSource: AddressesListDataSource = new AddressesListDataSource();

  displayedColumns = ['nom', 'address', 'active', 'actions'];

  constructor() {}

  ngOnChanges(): void {
    this.dataSource.data = this.addresses;

    if (this.table) {
      this.table.dataSource = this.dataSource;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
