import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import {Iauto} from '../iauto';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input("param") param : Iauto;

  
  imagenAuto(auto):string{
    if(auto.modelo == "ford KA")
    {
      return "https://acs2.blob.core.windows.net/imgcatalogo/l/VA_b71a8068f5dc490d98a4dbd31410f789.jpg"
    }
    else if(auto.modelo == "ford fiesta")
    {
      return "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/fiesta/2019/collections/adplanner/19_frd_fie_5dr_se_lgbl_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
    }else if(auto.modelo == "chevrolet onix"){
      return "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2019-onix/mov-2/colorizer-summit-white-onix-2019.png?imwidth=1200"
    }else if(auto.modelo == "volkswagen gol"){
      return "https://www.volkswagen.com.ar/content/dam/vw-ngw/vw_pkw/importers/ar/models/gol_opti/nuevo_gol/m103-frente.jpg/_jcr_content/renditions/original.transform/maxpp/img.jpg"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
