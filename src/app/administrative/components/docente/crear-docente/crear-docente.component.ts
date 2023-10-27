import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Docente } from 'src/app/administrative/models/docente';
import { DocenteService } from 'src/app/administrative/services/docente.service';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css'],
})
export class CrearDocenteComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() docente: any;

  nombrePagina: string = '';
  docenteForm: FormGroup;
  displayModal: boolean = false;
  identificacionDocente: number = 0;
  id: number = 0;
  editando: boolean = false;

  tiposDocumento = [
    { label: "Cedula de Ciudadania", value:"CC"},
    { label: "Cedula de Extranjeria", value:"CE"}
  ]
  escalafonTecnico = [
    { label: "Técnico", value:"Técnico"},
    { label: "Tecnólogo", value:"Tecnólogo"},
    { label: "Profesional", value:"Profesional"}
  ]
  escalafonExtension = [
    { label: "Técnico experiencia inferior 1 año ", value: "Tecnico experiencia inferior 1 año"},
    { label: "Técnico experiencia superior 1 año ", value: "Tecnico experiencia superior 1 año"},
    { label: "Tecnólogo ", value: "Tecnólogo"},
    { label: "Profesional ", value: "Profesional"}
  ]

  constructor(
    private router: Router,
    private messageService: MessageService,
    private _docenteService: DocenteService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.docenteForm = this.fb.group({
      id: [],
      identificacionDocente: [],
      tipoIdentificacionDocente: ['', Validators.required],
      nombreDocente: ['', Validators.required],
      apellidoDocente: ['', Validators.required],
      correoElectronicoDocente: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      telefonoCelularDocente: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      numeroContratoDocente: ['', Validators.required],
      ciudadResidenciaDocente: ['', Validators.required],
      escalafonTecnicoDocente: ['', Validators.required],
      escalafonExtensionDocente: ['', Validators.required],
    });


  }

  ngOnInit(): void {
    this.displayModal = true;

    if (this.docente) {
      this.editando = true;
      this.nombrePagina = 'EDITAR DOCENTE';
      this.docenteForm.patchValue(this.docente);
    } else {
      this.editando = false;
      this.nombrePagina = 'NUEVO DOCENTE';
      this.docenteForm.reset();
    }
  }

  ngAfterViewInit(): void {
    if (this.editando) {
      setTimeout(() => {
        const identificacionDocenteInput = document.getElementById(
          'identificacionDocente'
        );
        if (identificacionDocenteInput) {
          identificacionDocenteInput.focus();
        }
      }, 0);
    }
  }

  crearDocente(docenteForm: Docente) {
    if (this.docenteForm.valid) {
      if (docenteForm.id !== null) {
        this._docenteService.putDocente(docenteForm).subscribe({
          next: (data) => {
            this.messageService.add({
              severity: 'info',
              summary: 'Exito',
              detail: `El registro fue actualizado correctamente`,
            });
            setTimeout(() => {
              this.router.navigateByUrl('/listar-docente').then(() => {
                window.location.reload();
              });
            }, 1000);
          },
          error: (err) => {
            this.messageService.add({
              severity: 'Error',
              summary: 'Error al guardar los datos',
              detail: ``,
            });
          },
        });
      } else {
        this._docenteService.postDocente(docenteForm).subscribe({
          next: (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Registro creado exitosamente',
              detail: '',
            });
            this.docenteForm.reset();
            setTimeout(() => {
              this.router.navigateByUrl('/listar-docente').then(() => {
                window.location.reload();
              });
            }, 2000);
          },
          error: (err) => {
            if (err.status == 500) {
              this.messageService.add({
                severity: 'warn',
                summary: 'El docente ya se encuentra registrado',
                detail: '',
              });
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error al guardar los datos',
                detail: '',
              });
            }
          },
        });
      }
    } else {
      this.docenteForm.markAllAsTouched();
    }
  }
}
