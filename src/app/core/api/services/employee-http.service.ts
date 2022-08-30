import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddressDetails, EmployeeDetails } from '../server/data.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeHttpService {
  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<EmployeeDetails[]> {
    return this.http
      .get<{ employees: EmployeeDetails[] }>(`/api/employee`)
      .pipe(map(({ employees }) => employees));
  }

  getEmployeeById(id: number): Observable<EmployeeDetails> {
    return this.http.get<EmployeeDetails>(`/api/employee/${id}`);
  }

  getEmployeesAddress(): Observable<AddressDetails[]> {
    return this.http.get<AddressDetails[]>(`/api/address`);
  }

  createEmployee(employee: EmployeeDetails): Observable<EmployeeDetails> {
    return this.http.post<EmployeeDetails>(`/api/employee`, employee);
  }

  editEmployee(employee: EmployeeDetails): Observable<EmployeeDetails> {
    return this.http.put<EmployeeDetails>(
      `/api/employee/${employee.id}`,
      employee
    );
  }
}
