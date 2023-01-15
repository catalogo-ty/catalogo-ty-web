import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyRoutingModule } from './ty-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    DetalleComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    TyRoutingModule
  ]
})
export class TyModule { }
