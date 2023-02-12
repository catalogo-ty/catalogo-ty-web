import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TyService } from '../../services/ty.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  get listaCategorias() {
    return this.tyService.listaCategorias;
  }

  formularioAgregar = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    color: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', []]
  })

  constructor(private fb: FormBuilder,
              private tyService: TyService) { }

  ngOnInit(): void {
    this.tyService.getAllCategories().subscribe()
  }

  agregar(){
    console.log(this.formularioAgregar.value);
    
  }










}
