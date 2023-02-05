import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    ModalEditarComponent,
    ModalEliminarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
