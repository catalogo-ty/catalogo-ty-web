import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  oculto: boolean = true;

  // EXPRESION REGULAR EMAIL
  private patron = /\S+@\S+\.\S+/;

  //Formulario Reactivo Login
  formularioLogin = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.patron)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.formularioLogin.value;
    this.authService.login(email!, password!).subscribe({
      next: (res) => {
        this.formularioLogin.reset();
        this.router.navigateByUrl('/ty/listar')
      },
      error: (error) => {
        this.errorAlert(error.error.msg);
      }
    })
  }

  errorAlert(mensaje: string) {
    Swal.fire(
      'Error',
      mensaje,
      'error'
    )
  }





}
