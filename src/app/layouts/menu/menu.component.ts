import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

type RouteData = {
  link: string;
  title: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    RouterModule,
    LetModule,
  ],
})
export class MenuComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  routes$: Observable<RouteData[]> = of([
    { link: 'employees', title: 'Employés' },
    { link: 'addresses', title: 'Succursales' },
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
