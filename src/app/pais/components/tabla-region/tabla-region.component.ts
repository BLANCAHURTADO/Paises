import { Component,Input } from '@angular/core';
import { Paises } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-tabla-region',
  templateUrl: './tabla-region.component.html',
  styleUrls: ['./tabla-region.component.css']
})
export class TablaRegionComponent {
  @Input() paises : Paises[] = [];
}
