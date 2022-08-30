export interface EmployeeDetails {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  dateDébutContrat: string;
  tempsTravail: number;
  note: string;
  adresseDomicile: AddressDetails;
  adresseSuccursale: number;
  active: boolean;
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
