# GlobazGestion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

######################################################################################################################################################################################################################################

## Objectif

Pouvoir créer des employés actifs, et possiblement les passer en employés inactifs, et les lier avec une succursale de Globaz que vous créerez dans la page adresse.

## Pré requis pour le projet

- Simulation d'un backend, nous avons déjà implémenté une partie de mirageJS, il vous suffira de compléter suivant le besoin (https://miragejs.com/api/classes/db-collection/). Vous trouverez des exemples d'utilisation dans le composant app.
- Utilisation d'Angular matérial.
- Mettre en place les tests d'intégration.
- Chaque validation d'action doit déclancher un toast afin de savoir si tout s'est bien passé.
- Vous devez choisir au minimum un [Bonus] pour votre projet.
- Pour le design, nous attendons quelque chose d'épuré et facile d'utilisation (UX) (privilégier le bleu pour les actions).
- Libre à vous d'ajouter des points d'amélioration.
- Nous nous attendons également à ce qu'il y ait une réflexion de votre part sur la logique métier. 

## Bonus projet
- [Bonus++] Utilisation de NGRX.
- [Bonus] un unit test (privilégier cypress).

## Livraison

- Supprimer le dossier node_modules avant l'envoi à karine.hubner@globaz.ch.
- Nous devons pouvoir lancer le projet sans erreur.
- Vous présenterez votre projet lors de l'entretien.

## Projet étape 1

- [Général] Création d'un menu de navigation entre les pages "employés" et "adresses".
- [Général] Création des pages "employés" et "adresses".

## Projet étape 2

- [Page-adresses] Visualisation des adresses disponible.
- [Page-adresses] Création d'un formulaire pour ajouter/modifier une adresse pour l'entreprise.
- [Page-adresses] Pouvoir désactiver une adresse.
- [Page-adresses] [Bonus] Les visualiser sur une map.

## Projet étape 3

- [Page-employés] Pouvoir afficher ces employés dans une liste, ajout d'icône pour l'édition, le transfert en inactif (en actif pour les utilisateurs inactifs).
- [Page-employés] Pouvoir trier le tableau, filtre sur les actifs/inactifs et sur les adresses d'entreprise.
- [Page-employés] [Bonus] Mettre en place un système de pagination.
- [Page-employés] [Bonus] Mettre en place un système de rafraichissement de la liste toutes les 5 secondes.
- [Page-employés] [Bonus] Mettre en place une alerte lors de l'anniversaire d'un employé.

## Projet étape 4

- [Page-employés] Création d'un formulaire d'ajout d'employé avec les champs (tout obligatoire sauf l'adresse perso):
  - nom
  - prénom
  - date de naissance
  - date de début de contrat
  - pourcentage de temps de travail
  - adresse perso
  - sélection d'adresse d'entreprise
  - note

