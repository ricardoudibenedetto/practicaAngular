import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrafo-componente',
  templateUrl: './parrafo-componente.component.html',
  styleUrls: ['./parrafo-componente.component.css']
})
export class ParrafoComponenteComponent implements OnInit {

  parrafo : string ="parrafo de prueba ";
  constructor() { }

  ngOnInit() {
  }

}
