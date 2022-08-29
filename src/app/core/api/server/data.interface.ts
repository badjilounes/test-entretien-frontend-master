export interface EmployeeDetails {
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
    active: boolean;
  };
  adresseSuccursale: number;
}

export interface AddressDetails {
  id: number;
  nom: string;
  rue: string;
  numero: number;
  zip: number;
  ville: string;
  active: boolean;
  isSuccursal: boolean;
}
