import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from 'src/app/ty/services/storage.service';
import { LoginResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hhtp: HttpClient,
              private storageService: StorageService) { }

  private apiURL: string = 'https://ty-backend2.onrender.com/api/auth/login';

  login(email:string, password:string):Observable<LoginResponse>{
    
    const body = {email, password}
    const url = this.apiURL;

    return this.hhtp.post<LoginResponse>(url, body).pipe(
      tap((res)=>{
        this.storageService.guardarToken(res.token);
        this.storageService.guardarUsuario(res.user);
      })
    )
  }








}

