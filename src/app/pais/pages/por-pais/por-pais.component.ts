import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  error : boolean = false;
  public paises : Paises[] = [];
  paisesSugeridos: Paises[] = [];
  termino : string="";
  mostrarSugerencias : boolean = true;

  constructor( private _servicePais : PaisService){}

  // buscar( termino : string){
  //   this.error = false;
  //   this._servicePais.buscarPais(termino).subscribe({next: (data) =>{
  //   console.log(data);
  //     //maneja los errores con el 400
  //     this.paises = data;
  //   },error:(e) => console.log('error'),
  //    complete:() => console.info('complete')
  //     // this.error=true;
  //   })
  // }

  buscar( termino : string){
    this.mostrarSugerencias = false;
    this.error = false;

    this._servicePais.buscarPais(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string ){
    this.mostrarSugerencias=true;
    this.error = false;
    this.termino =termino;
    this._servicePais.buscarPais(termino).subscribe(data =>
       this.paisesSugeridos = data.splice(0,5)
       ,(err) => {this.paisesSugeridos = []});
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }

}
