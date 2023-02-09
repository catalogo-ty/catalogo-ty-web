import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyResponse } from '../interfaces/ty';

@Injectable({
  providedIn: 'root'
})
export class TyService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://ty-backend2.onrender.com/api/ty';


  getAllTy():Observable<TyResponse>{
    const url = this.apiURL;

    return this.http.get<TyResponse>(url);
  }


}
