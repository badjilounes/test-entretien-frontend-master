export interface EmployeDetails {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  dateDébutContrat: string;
  tempsTravail: number;
  note: string;
  adresseDomicile: {
    id: number;
    nom: string;
    rue: string;
    numero: number;
    zip: number;
    ville: string;
  };
  adresseSuccursale: number;
}

export interface AdresseDetails {
  id: number;
  nom: string;
  rue: string;
  numero: number;
  zip: number;
  ville: string;
}
