import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  usuario: User = {
    name: '',
    email: '',
    role: '',
    status: true,
    uid: ''
  }

  constructor() { }

  guardarToken(token: string){
    localStorage.setItem('token-usuario', token)
  }


  guardarUsuario(usuario: User){
    localStorage.setItem('usuario-login', JSON.stringify(usuario));
  }


  obtenerUsuario(): User {
    let usuario: string | null;

    usuario = localStorage.getItem('usuario-login')!;

    return JSON.parse(usuario); // Transformado en objeto

  }

  obtenerToken(): string | null {
    return localStorage.getItem('token-usuario');
  }





}
