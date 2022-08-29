import { Component } from '@angular/core';
import { makeServer } from './shared/technical/api/server/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'globaz-gestion';

  constructor() {
    makeServer();
  }
}
