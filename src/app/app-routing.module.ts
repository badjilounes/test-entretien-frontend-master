import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layouts/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },

  { path: '', component: MenuComponent, children: [
      { path: 'employees', loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule) },
    ]
  },

  { path: '**', redirectTo: 'employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
