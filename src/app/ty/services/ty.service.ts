import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category, CategoryResponse, Ty, TyResponse } from '../interfaces/ty';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TyService {

  listaCategorias: Category[] = [];

  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  private apiURL = 'https://ty-backend2.onrender.com/api';

  getAllCategories():Observable<CategoryResponse>{
    const url = this.apiURL + '/category';
    return this.http.get<CategoryResponse>(url).pipe(
      tap((res)=>{
        this.listaCategorias = res.categories;
      })
    )
  }

  getAllTy():Observable<TyResponse>{
    const url = this.apiURL + '/ty';
    return this.http.get<TyResponse>(url);
  }

  createTy(name:string, color:string, category:string){
    const url = this.apiURL + '/ty';
    const body = {name, color, category};

    return this.http.post<Ty>(url, body, {
      headers: new HttpHeaders({
        'x-token': this.storageService.obtenerToken()!
      })
    });

  }






}
