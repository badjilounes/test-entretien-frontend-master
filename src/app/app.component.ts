import { Component } from '@angular/core';
import { EmployeeHttpService } from './shared/services/employee-http.service';
import { makeServer } from './shared/server/server';
import { EmployeeDetails } from './shared/server/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'globaz-gestion';

  constructor(private employeService: EmployeeHttpService) {
    makeServer();
  }

  ngOnInit(): void {
    // Récuperer un seul employé
    this.employeService.getEmployeeById(2).subscribe((data) => {
      console.log('getEmployeById', data);
    });

    // Récuperer les adresses
    this.employeService.getEmployeesAddress().subscribe((data) => {
      console.log('getEmployesAdresse', data);
    });
  }

  nouvelEmploye(): void {
    // Création d'un employé
    const newEmploye: EmployeeDetails = {
      id: 0,
      nom: 'Mard',
      prenom: 'Ysa',
      dateNaissance: '1984-01-05T23:00:00.000Z',
      dateDébutContrat: '2022-01-31T23:00:00.000Z',
      tempsTravail: 100,
      note: 'RAS',
      adresseDomicile: {
        id: 1,
        nom: 'Zurich',
        rue: 'Engelstrasse',
        numero: 78,
        zip: 8004,
        ville: 'Zürich',
        active: true,
      },
      adresseSuccursale: 1,
    };

    this.employeService.addEmployee(newEmploye).subscribe((data) => {
      console.log('addEmploye', data);
    });
  }

  getEmployesList(): void {
    // Récuperer les employés
    this.employeService.getEmployeesList().subscribe((data) => {
      console.log('getEmployesList', data);
    });
  }
}
