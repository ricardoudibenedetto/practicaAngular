import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { ParrafoComponenteComponent } from './parrafo-componente/parrafo-componente.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';
import { FormsModule }   from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { HttpClientModule } from '@angular/common/http';
import {AutosService} from './autos.service';
@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    ParrafoComponenteComponent,
    AutoComponentComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
