import { Component, OnInit } from '@angular/core';
import { Ty } from '../../interfaces/ty';
import { TyService } from '../../services/ty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  listaTy: Ty[] = [];

  constructor(private tyService: TyService) { }

  ngOnInit(): void {
    this.obtenerTys();
  }

  obtenerTys() {
    this.tyService.getAllTy().subscribe({
      next: (res) => {
        this.listaTy = res.ty;

      }
    })
  }


  borrarTy(id: string) {

    Swal.fire({
      title: '¿Desea borrarlo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tyService.deleteTy(id).subscribe({
          next: (res: any) => {
            Swal.fire('Borrado', `${res.msg}`, 'success');
            //actualizar la lista despues de borrar
            this.obtenerTys();
          }
        })
      }
    })
  }
}