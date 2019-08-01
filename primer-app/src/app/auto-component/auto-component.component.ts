import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Time } from '@angular/common';

@Component({
  selector: 'app-auto-component',
  templateUrl: './auto-component.component.html',
  styleUrls: ['./auto-component.component.css']
})
export class AutoComponentComponent implements OnInit {

  constructor() { }
 
  Autos : {id:number,fecha : number , modelo : string , velocidad : number,patente : string}[]=
  [
    { "id":1,"fecha" : 2019, "modelo": "ford KA", velocidad: 210, patente :"AC 732 PT"},
    {"id":2, "fecha" : 2015, "modelo": "ford fiesta", velocidad: 250, patente :"BA 554 AC"},
    { "id":3,"fecha" : 2012, "modelo": "chevrolet onix", velocidad: 220, patente :"AC 654 AC"},
    { "id":4,"fecha" : 2016, "modelo": "volkswagen gol", velocidad: 160, patente :"AT 452 TC"},
    {"id":5, "fecha" : 2011, "modelo": "ford KA", velocidad: 180, patente :"AF 454 BF"}
  ]
  colorEstilo(auto : any):string{
    if(auto.fecha < 2014){
      return "text-danger"
    }else
    {
      return "text-success"
    }
  }
  ngOnInit() {
  }

}
