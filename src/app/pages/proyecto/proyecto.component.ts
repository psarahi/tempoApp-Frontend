import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../Servicios/proyectos.service';
import { ProyectoModel } from 'src/app/Modelos/proyecto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MiembrosModel } from '../../Modelos/miembros';
import { MiembrosService } from '../../Servicios/miembros.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  validateForm: FormGroup;
  visible = false;
  listaProtectos: ProyectoModel[];
  listOfDisplayData: ProyectoModel[];
  dataProyectos;
  dataMiembros: MiembrosModel[];
  constructor(
    private serviceProyecto: ProyectosService,
    private fb: FormBuilder,
    private serviceMiembros: MiembrosService
  ) { }

  ngOnInit(): void {

    this.serviceMiembros.getMiembros().toPromise().then(
      (data: MiembrosModel[]) => {
        this.dataMiembros = data;
       // console.log(this.dataMiembros);

      }
    );

    this.serviceProyecto.getProyecto().toPromise().then(
      (data: ProyectoModel[]) => {
        this.listaProtectos = data;
        this.listOfDisplayData = [...this.listaProtectos];
      }
    );
    this.validateForm = this.fb.group({
      nombreProyecto: [null, [Validators.required]],
      responsable: [null, [Validators.required]],
      tiempoProyectadoPro: [null, [Validators.required]],
      presuProyectadoPro: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    // console.log(this.validateForm.get(['estado']).value);

    this.dataProyectos = {
      ...this.validateForm.value,
      idCuenta: 'actual',
      tiempoRealPro: 0,
      presupuestoRealPro: 0
    };

    this.serviceProyecto.postProyecto(this.dataProyectos).toPromise().then(
      (data: ProyectoModel) => {
        // this.listaProtectos = data;
        // console.log(this.listaProtectos);

        this.listOfDisplayData.push({ ...data });
        console.log(this.listOfDisplayData);
      }
    );
    this.visible = false;

  }

  open(): void {
    this.visible = true;


    // this.validateForm = this.fb.group({
    //   nombreProyecto: [''],
    //   responsable: [''],
    //   tiempoProyectadoPro: [''],
    //   presuProyectadoPro: [''],
    //   estado: ['']
    // });
  }

  close(): void {
    this.visible = false;
    //Este submitForm esta sospechoso
    // Solo lo puse para prbar, porque no sabia despues de que se ejevutaba
  }

}
