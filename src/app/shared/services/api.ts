import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresseDetails, EmployeDetails } from '../server/data.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private http: HttpClient) {}

  getEmployesList(): Observable<EmployeDetails[]> {
    return this.http.get<EmployeDetails[]>(`/api/employe`);
  }

  getEmployeById(id: number): Observable<EmployeDetails> {
    return this.http.get<EmployeDetails>(`/api/employe/${id}`);
  }

  getEmployesAdresse(): Observable<AdresseDetails[]> {
    return this.http.get<AdresseDetails[]>(`/api/adresse`);
  }

  addEmploye(employe: EmployeDetails): Observable<EmployeDetails> {
    return this.http.post<EmployeDetails>(`/api/employe`, employe);
  }
}
