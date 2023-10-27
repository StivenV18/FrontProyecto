import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Docente } from 'src/app/administrative/models/docente';
import { DocenteService } from 'src/app/administrative/services/docente.service';

@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css']
})
export class ListarDocenteComponent implements OnInit {
  listaDocentes: Docente[] = [];
  titulo: string = "ADMINISTRACIÓN Y GESTIÓN DE DOCENTES"
  listaDocentesOriginal: Docente[] = [];
  docenteActual: Docente | null | undefined = null;
  rowsPerPage = 5;
  displayModal : boolean = false;


  constructor(
    private _docenteService: DocenteService,
    private messageService: MessageService,
    private confirmationService:ConfirmationService) {
  }

  ngOnInit(): void {
    this.listarDocente()
  }

  listarDocente() {
    this._docenteService.getListaDocentes().subscribe({
      next: (data: any) => {
        this.listaDocentes = data;
        this.listaDocentesOriginal = [...this.listaDocentes];

      }
    })
  }

  applyFilters(value: string) {
    value = value.toLowerCase();
    this.listaDocentes = this.listaDocentesOriginal.filter(docente =>
      docente.identificacionDocente ||
      docente.nombreDocente.toLowerCase().includes(value) ||
      docente.apellidoDocente.toLowerCase().includes(value) ||
      docente.correoElectronicoDocente.toLowerCase().includes(value) ||
      docente.numeroContratoDocente.toLowerCase().includes(value) ||
      docente.escalafonTecnicoDocente.toLowerCase().includes(value)
    );
  }
  cambiarRegistrosPorPagina(event: any) {
    const num = event.target.value;
    this.rowsPerPage = Number(num);
  }

  editarDocente(identificacionDocente: number) {
    const docente = this.listaDocentes.find(docente => docente.identificacionDocente === identificacionDocente);
    if (docente) {
      this.docenteActual = docente;
      this.displayModal = true;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo encontrar el docente con la identificación proporcionada',
      });
    }
  }

  cerrarModal() {
    this.displayModal = false;
    this.docenteActual = null;
  }

  eliminarDocente(id: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target!,
      acceptLabel: 'SI',
      rejectLabel: 'NO',
      message: '¿Está seguro que deseas eliminar el docente?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._docenteService.deleteDocente(id).subscribe({
          next: data => {
            this.messageService.add({
              severity: 'warn',
              summary: 'Docente eliminado correctamente',
              detail: ''
            });
            this.listaDocentes = this.listaDocentes.filter(docente => docente.id !== id);
            this.listaDocentesOriginal = [...this.listaDocentes];
          }, error: error => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error al eliminar el docente',
              detail: ''
            });
          }
        })
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Operación cancelada',
          detail: 'No se ha eliminado el docente'
        });
      }
    });
  }
}
