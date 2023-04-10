import { Component,Input } from '@angular/core';
import { Paises } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent {

//me trae los datos del componente padre
@Input() paises : Paises[] = [];

constructor(){}

}
