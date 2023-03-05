import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Ty } from '../../interfaces/ty';
import { TyService } from '../../services/ty.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  ty!: Ty;

  constructor(private activatedRoute: ActivatedRoute,
              private tyService: TyService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id})=> this.tyService.getOneTy(id) )
    ).subscribe({
      next:(res)=>{
        this.ty = res;
      }
    })
  }













}
