import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuarioService } from 'src/app/administrative/services/login-usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon : string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth : LoginUsuarioService, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Usuario: ['', Validators.required],
      Contraseña: ['', Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe({
        next:(respuesta)=>{
          console.log(respuesta)
          this.router.navigate(['listar-docente'])
        },
        error: (err)=>{
          alert(err?.error.message)
        }
      })
    }
  }
}
