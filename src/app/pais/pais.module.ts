import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PoCapitalComponent } from './pages/po-capital/po-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { AppRoutingModule } from '../app-routing.module';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { BuscarPaisComponent } from './components/buscar-pais/buscar-pais.component';
import { TablaRegionComponent } from './components/tabla-region/tabla-region.component';


@NgModule({
  declarations: [
    PoCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    TablaPaisComponent,
    BuscarPaisComponent,
    TablaRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    PoCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
