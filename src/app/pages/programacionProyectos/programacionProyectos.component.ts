import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ProgramacionProyectoService } from '../../Servicios/programacionProyecto.service';
import { ProgramacionProyectoModel } from 'src/app/Modelos/programacionProyecto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActividadesService } from '../../Servicios/actividades.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-programacionProyectos',
  templateUrl: './programacionProyectos.component.html',
  styleUrls: ['./programacionProyectos.component.css']
})
export class ProgramacionProyectosComponent implements OnInit {

  detalleProyecto;
  validateFormActividades: FormGroup;
  loadingTable = true;
  visibleActividad = false;
  visibleMiembro = false;
  nombreProyecto;
  listaActividades: [];
  listOfDisplayData: ProgramacionProyectoModel[];
  listaProgramacionProyectos: ProgramacionProyectoModel[];
  dataProgramacionProyecto;


  constructor(
    private router: Router,
    private serviceProgramacionProyectos: ProgramacionProyectoService,
    private serviceActividades: ActividadesService,
    private message: NzMessageService,
    private fb: FormBuilder,

  ) {
    this.detalleProyecto = this.router.getCurrentNavigation().extras.state;
    console.log(this.detalleProyecto);

  }

  createMessage(type: string, mensaje: string): void {
    this.message.create(type, mensaje);
  }

  submitFormActividades(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateFormActividades.controls) {
      this.validateFormActividades.controls[i].markAsDirty();
      this.validateFormActividades.controls[i].updateValueAndValidity();
    }
    this.dataProgramacionProyecto = {
      ...this.validateFormActividades.value,
      idCuenta: localStorage.getItem('infoUser'),
      idProyecto: this.detalleProyecto._id,
      tiempoReal: 0,
      presupuestoReal: 0
    };

    this.serviceProgramacionProyectos.postProgramacionProyecto(this.dataProgramacionProyecto)
      .toPromise()
      .then(
        (data: ProgramacionProyectoModel) => {
          this.listOfDisplayData = [...this.listOfDisplayData, data];
          this.loadingTable = false;

          this.createMessage('success', 'Registro creado con exito');

          this.validateFormActividades = this.fb.group({
            idActividad: [null, [Validators.required]],
            tiempoProyectado: [null, [Validators.required]],
            presupuestoProyectado: [null, [Validators.required]],
            estado: [null, [Validators.required]],
          });
        },
        (error) => {
          console.log(error);

          this.createMessage('error', 'Opps!!! Algo salio mal');
        }
      );

  }

  ngOnInit() {

    this.serviceActividades.getActividades()
      .toPromise()
      .then(
        (data: []) => {
          this.listaActividades = data;
        }
      );

    this.serviceProgramacionProyectos.getProgramacionProyecto()
      .toPromise()
      .then(
        (data: ProgramacionProyectoModel[]) => {
          this.listaProgramacionProyectos = data;
          this.listOfDisplayData = [...this.listaProgramacionProyectos];
          this.loadingTable = false;
        }
      );

    this.validateFormActividades = this.fb.group({
      idActividad: [null, [Validators.required]],
      tiempoProyectado: [null, [Validators.required]],
      tiempoReal: [null, [Validators.required]],
      presupuestoProyectado: [null, [Validators.required]],
      presupuestoReal: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });

  }

  openActividad(): void {
    this.visibleActividad = true;
  }

  closeActividad(): void {
    this.visibleActividad = false;
  }

  openMiembro(): void {
    this.visibleActividad = true;
  }

  closeMiembro(): void {
    this.visibleActividad = false;
  }
}
