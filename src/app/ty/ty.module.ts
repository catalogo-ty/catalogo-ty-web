import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyRoutingModule } from './ty-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MaterialModule } from '../material/material.module';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    DetalleComponent,
    PerfilComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    TyRoutingModule,
    MaterialModule,
    MatButtonModule,
    SharedModule,
    RouterModule
  ]
})
export class TyModule { }
