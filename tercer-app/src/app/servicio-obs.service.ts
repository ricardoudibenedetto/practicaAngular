import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {EQUIPOS} from './equipos';
@Injectable({
  providedIn: 'root'
})
export class ServicioObsService {
  private behaviorSubject = new BehaviorSubject<any>(null);
  private observable$ : Observable<any> = this.behaviorSubject.asObservable();
  
  constructor() { }
  
  equipo : any;
  
  getObservable():Observable<any>{
    return this.observable$;
  }
  setObservable(cod : string ,pais : string  ){
    this.equipo = EQUIPOS[pais][cod];
    console.log(this.equipo.nombre);
    this.behaviorSubject.next(this.equipo);
  }
}


