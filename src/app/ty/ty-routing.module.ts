import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MainComponent } from './pages/main/main.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'detalle/:id', component: DetalleComponent
      },
      {
        path: 'listar', component: ListarComponent
      },
      {
        path: 'perfil', component: PerfilComponent
      },
      {
        path: '**', redirectTo:'listar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TyRoutingModule { }
