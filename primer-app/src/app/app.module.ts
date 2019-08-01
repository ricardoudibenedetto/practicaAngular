import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { ParrafoComponenteComponent } from './parrafo-componente/parrafo-componente.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    ParrafoComponenteComponent,
    AutoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
