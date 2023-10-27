import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDocenteComponent } from './components/docente/crear-docente/crear-docente.component';
import { ListarDocenteComponent } from './components/docente/listar-docente/listar-docente.component';
import { AdministrativeRoutingModule } from './administrative-routing.module';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TableModule } from "primeng/table";
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { MessagesModule } from "primeng/messages";
import { NgSelectModule } from "@ng-select/ng-select";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './components/login-usuario/login/login.component';
import { SignupComponent } from './components/login-usuario/signup/signup.component';




@NgModule({
  declarations: [
    CrearDocenteComponent,
    ListarDocenteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    StepsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    MessagesModule,
    NgSelectModule,
    ConfirmDialogModule,
    DialogModule,
    HttpClientModule,
    CheckboxModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
})
export class AdministrativeModule { }
