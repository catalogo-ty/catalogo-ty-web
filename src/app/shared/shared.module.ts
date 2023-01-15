import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ModalEditarComponent,
    ModalEliminarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
