import { Component, OnInit } from '@angular/core';
import { Ty } from '../../interfaces/ty';
import { TyService } from '../../services/ty.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  listaTy: Ty[] = [];

  constructor(private tyService: TyService){}

  ngOnInit(): void {
    this.tyService.getAllTy().subscribe({
      next: (res)=>{
        this.listaTy = res.ty;
        
      }
    })
  }





}
