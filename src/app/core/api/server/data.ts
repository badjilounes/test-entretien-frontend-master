import { AddressDetails, EmployeeDetails } from './data.interface';

export const employeesData: EmployeeDetails[] = [
  {
    id: 1,
    nom: 'Feria',
    prenom: 'Joss',
    dateNaissance: '1974-10-05T23:00:00.000Z',
    dateDébutContrat: '2022-07-31T23:00:00.000Z',
    tempsTravail: 80,
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
  },
  {
    id: 2,
    nom: 'Bers',
    prenom: 'Nathan',
    dateNaissance: '19790-08-05T23:00:00.000Z',
    dateDébutContrat: '2022-06-31T23:00:00.000Z',
    tempsTravail: 50,
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
  },
];

export const addressesData: AddressDetails[] = [
  {
    id: 1,
    nom: 'Zurich',
    rue: 'Engelstrasse',
    numero: 78,
    zip: 8004,
    ville: 'Zürich',
    active: true,
    isSuccursal: true,
  },
];
