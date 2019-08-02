import { Component } from '@angular/core';
import {Persona} from "./persona";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-app';
  
  pepe = new Persona("pepe", 65);
  
}
