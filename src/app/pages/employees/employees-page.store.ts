import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { EmployeeDetails } from 'src/app/core/api/server/data.interface';
import { EmployeeHttpService } from 'src/app/core/api/services/employee-http.service';
import { EmployeesCreateOrUpdateDialogComponent } from './components/employees-create-or-update-dialog/employees-create-or-update-dialog.component';

type EmployeesPageStoreState = {
  employees: EmployeeDetails[];
  dialogRef?: MatDialogRef<EmployeesCreateOrUpdateDialogComponent>;
};

@Injectable()
export class EmployeesPageStore extends ComponentStore<EmployeesPageStoreState> {
  readonly employees$: Observable<EmployeeDetails[]> = this.select(
    (state) => state.employees
  );

  constructor(
    private readonly employeesHttpService: EmployeeHttpService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) {
    super({
      employees: [],
    });
  }

  readonly createEmployee = this.effect(
    (save$: Observable<EmployeeDetails>) => {
      return save$.pipe(
        switchMap((employee) =>
          this.employeesHttpService.createEmployee(employee)
        ),
        tap(() => this.get().dialogRef?.close({ refresh: true })),
        tap((employee: EmployeeDetails) =>
          this.snackBar.open(
            `L'employé "${employee.nom}" a été ajoutée`,
            'OK',
            {
              duration: 2000,
            }
          )
        ),
        catchError((error) => {
          this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
          return EMPTY;
        })
      );
    }
  );

  readonly editEmployee = this.effect((save$: Observable<EmployeeDetails>) => {
    return save$.pipe(
      switchMap((employee) => this.employeesHttpService.editEmployee(employee)),
      tap(() => this.get().dialogRef?.close({ refresh: true })),
      tap((employee: EmployeeDetails) =>
        this.snackBar.open(`L'employé "${employee.nom}" a été modifiée`, 'OK', {
          duration: 2000,
        })
      ),
      catchError((error) => {
        this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
        return EMPTY;
      })
    );
  });

  readonly getEmployeeList = this.effect((save$: Observable<void>) => {
    return save$.pipe(
      switchMap(() => this.employeesHttpService.getEmployeesList()),
      tap((employees: EmployeeDetails[]) =>
        this.patchState(() => ({ employees }))
      ),
      catchError((error) => {
        this.snackBar.open(error.error.message, 'OK', { duration: 2000 });
        return EMPTY;
      })
    );
  });

  readonly openCreateOrEditEmployeeDialog = this.effect(
    (save$: Observable<EmployeeDetails | void>) => {
      return save$.pipe(
        map((employee: EmployeeDetails | void) =>
          this.dialog.open(EmployeesCreateOrUpdateDialogComponent, {
            width: '500px',
            data: employee,
          })
        ),
        tap((dialogRef) => this.patchState(() => ({ dialogRef }))),
        switchMap((dialogRef) => dialogRef.afterClosed()),
        filter((result) => result?.refresh),
        tap(() => this.getEmployeeList())
      );
    }
  );
}
