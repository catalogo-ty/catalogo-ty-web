import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ty',
    loadChildren: ()=> import('./ty/ty.module').then(m => m.TyModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**', redirectTo: 'ty'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
