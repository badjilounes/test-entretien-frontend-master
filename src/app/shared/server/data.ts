import { AdresseDetails, EmployeDetails } from './data.interface';

export const employesData: EmployeDetails[] = [
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
    },
    adresseSuccursale: 1,
  },
];

export const adresseData: AdresseDetails = {
  id: 1,
  nom: 'Zurich',
  rue: 'Engelstrasse',
  numero: 78,
  zip: 8004,
  ville: 'Zürich',
};
