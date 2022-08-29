import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_PAGINATOR_INITIALIZER } from './core/paginator/paginator.initializer';
import { MenuComponent } from './layouts/menu/menu.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenuComponent,
  ],
  providers: [APP_PAGINATOR_INITIALIZER],
  bootstrap: [AppComponent],
})
export class AppModule {}
