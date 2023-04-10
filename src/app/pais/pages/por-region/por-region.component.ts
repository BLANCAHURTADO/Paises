import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
 regiones: string [] = ['europe','asia','america','africa','oceania'];

 regionActiva : string = "";
 paises : Paises[] = [];

 constructor(private _paisService : PaisService){}
 
 getClaseCss(region : string){
  return(region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
 }

 actvarRegion(region : string){
  this.regionActiva = region;
  this._paisService.buscarRegion(region)
  .subscribe(data=>{
    this.paises = data;
  })
 }

}
