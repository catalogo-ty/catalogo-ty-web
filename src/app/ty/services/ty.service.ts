import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category, CategoryResponse, TyResponse } from '../interfaces/ty';

@Injectable({
  providedIn: 'root'
})
export class TyService {

  listaCategorias: Category[] = [];

  constructor(private http: HttpClient) { }

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


}
