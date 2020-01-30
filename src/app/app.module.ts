import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CifrarcadenaPipe } from './pipes/cifrarcadena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe,
    CifrarcadenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
