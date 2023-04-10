import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Paises } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais! :Paises;
  error: boolean =false;

  constructor(private activateRoute: ActivatedRoute, private _servicePais : PaisService){}

  ngOnInit(): void {
  //switchMap permite recibir un observable y enviar otro--- procesos asyncronos , espera el primer proceso
  //para ejecutar el que sigue.
    this.activateRoute.params.pipe( switchMap(({id})=>
      this._servicePais.buscarPaisID(id)))
    .subscribe(resp =>{
      console.log(resp)
      this.pais =resp[0];
    },err => { this.error = true})
    //manda una peticion dentro de otra peticion , esto se cambia por el switchmap
    // this.activateRoute.params.subscribe(({id}) => {

    //   this._servicePais.buscarPaisID(id).subscribe(data=>{
    //    console.log(data)
    //   })

    // })
  }
  

  

}
