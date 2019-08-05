import { Component, OnInit } from '@angular/core';
import { ServicioObsService } from '../servicio-obs.service';
@Component({
  selector: 'app-detalle-comp',
  templateUrl: './detalle-comp.component.html',
  styleUrls: ['./detalle-comp.component.css']
})
export class DetalleCompComponent implements OnInit {
  private observe$ = this.servicioObserv.getObservable(); 
  constructor(private servicioObserv : ServicioObsService) { }
  equipo : any;
  setEquipo(equipParam){
   
  }
  ngOnInit() {
    this.observe$.subscribe( equipo =>{
    this.equipo = equipo;
    })
  }

}
