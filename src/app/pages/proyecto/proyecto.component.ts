import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../Servicios/proyectos.service';
import { ProyectoModel } from 'src/app/Modelos/proyecto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private serviceProyecto: ProyectosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.serviceProyecto.getProyecto().subscribe(
      (data: ProyectoModel[]) => {
        this.listaProtectos = data;
        this.listOfDisplayData = [...this.listaProtectos];
      }
    );
    this.validateForm = this.fb.group({
      nombreProyecto: [''],
      responsable: [''],
      tiempoProyectadoPro: [''],
      presuProyectadoPro: [''],
    });
  }

  submitForm(): void {
    //console.log(this.validateForm.get(['nombreProyecto']).value);
    console.log(this.validateForm.value);

    this.dataProyectos = {
      ...this.validateForm.value,
      idCuenta: 'actual',
      tiempoRealPro: 0,
      presupuestoRealPro: 0,
      estado: true
    };
     this.serviceProyecto.postProyecto(this.dataProyectos).toPromise().then(
       (data) => {
         console.log(data);
       }
     );
    this.visible = false;

  }

  open(): void {
    this.visible = true;
    this.validateForm = this.fb.group({
      nombreProyecto: [''],
      responsable: [''],
      tiempoProyectadoPro: [''],
      presuProyectadoPro: [''],
    });
  }

  close(): void {
    this.visible = false;
    //Este submitForm esta sospechoso
    // Solo lo puse para prbar, porque no sabia despues de que se ejevutaba
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


}
