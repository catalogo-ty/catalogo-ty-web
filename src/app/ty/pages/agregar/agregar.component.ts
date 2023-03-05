import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
    category: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private tyService: TyService) { }

  ngOnInit(): void {
    this.tyService.getAllCategories().subscribe()
  }

  agregar(){
    if (this.formularioAgregar.invalid) {
      return
    }

    const { name, color, category } = this.formularioAgregar.value;

    this.tyService.createTy(name!, color!, category!).subscribe({
      next:(res)=>{
        this.agregarAlert(res.name);
      },
      error:(error)=>{
        console.log(error.error.msg);
        
        Swal.fire(
          'Alerta',
          error.error.msg,
          'info'
        )
      }
    })
  }

  agregarAlert(tyName:string) {
    Swal.fire(
      'Nuevo Ty agregado',
      `El pequeño ${tyName} se agregó a la lista`,
      'success'
    )
  }








}
