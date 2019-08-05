import { Component, OnInit } from '@angular/core';
import {EQUIPOS} from '../equipos';
import {TABLAS} from '../tablas';
import { HttpClientModule }    from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { ServicioObsService } from '../servicio-obs.service';
@Component({
  selector: 'app-tabla-comp',
  templateUrl: './tabla-comp.component.html',
  styleUrls: ['./tabla-comp.component.css']
})
export class TablaCompComponent implements OnInit {
  tabla:any[]; 
  pais: string;
  constructor(private activeRoute : ActivatedRoute, private servicioObserver : ServicioObsService){ }
  
  getTabla(pais : string):void{
    this.tabla = TABLAS[pais];
  }

  setEquipo(cod : string){
    this.servicioObserver.setObservable(cod, this.pais);
  }
  ngOnInit() {
    const param$ = this.activeRoute.paramMap;
    param$
     .subscribe(pais => {
       this.pais = pais.get("pais")
       this.getTabla(this.pais);

     })
  }

}
