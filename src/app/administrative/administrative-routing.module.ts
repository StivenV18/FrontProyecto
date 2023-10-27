import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDocenteComponent } from './components/docente/crear-docente/crear-docente.component';
import { ListarDocenteComponent } from './components/docente/listar-docente/listar-docente.component';
import { LoginComponent } from './components/login-usuario/login/login.component';
import { SignupComponent } from './components/login-usuario/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crear-docente',
        component: CrearDocenteComponent,
      },
      {
        path: 'listar-docente',
        component: ListarDocenteComponent,
      },
      {
        path: 'editar-docente/:identificacionDocente',
        component: ListarDocenteComponent,
      },
      {
        path: 'eliminar-docente/:identificacionDocente',
        component: ListarDocenteComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRoutingModule {}
