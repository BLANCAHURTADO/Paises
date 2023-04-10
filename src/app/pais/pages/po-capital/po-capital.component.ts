import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-po-capital',
  templateUrl: './po-capital.component.html',
  styleUrls: ['./po-capital.component.css']
})
export class PoCapitalComponent {

  error : boolean = false;
  public paises : Paises[] = [];

  constructor( private _servicePais : PaisService){}

  buscar( termino : string){
    this.error = false;
    this._servicePais.buscarCapital(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string ){
    this.error = false;
  }
}
