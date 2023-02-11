import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hhtp: HttpClient) { }

  private apiURL: string = 'https://ty-backend2.onrender.com/api/auth/login';

  login(email:string, password:string):Observable<LoginResponse>{
    
    const body = {email, password}
    const url = this.apiURL;

    return this.hhtp.post<LoginResponse>(url, body);


  }








}

