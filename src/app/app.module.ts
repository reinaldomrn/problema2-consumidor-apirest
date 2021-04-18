import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

// importar rutas
import { APP_ROUTES } from './app.routes';
import { HeadersComponent } from './components/headers/headers.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, HeadersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
