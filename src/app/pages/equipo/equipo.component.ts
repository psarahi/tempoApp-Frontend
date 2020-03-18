import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MiembrosModel } from 'src/app/Modelos/miembros';
import { MiembrosService } from '../../Servicios/miembros.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  validateForm: FormGroup;
  visible = false;
  listaMiembros: MiembrosModel[];
  listOfDisplayData: MiembrosModel[];
  dataMiembros;

  constructor(
    private serviceMiembro: MiembrosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.serviceMiembro.getMiembros().subscribe(
      (data: MiembrosModel[]) => {
        this.listaMiembros = data;
        this.listOfDisplayData = [...this.listaMiembros];
      }
    );


    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      correo: [null, [Validators.email, Validators.required]],
      costoHr: [null, [Validators.required]],
      expertis: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    debugger;
    console.log(this.validateForm.value);

    this.dataMiembros = {
      ...this.validateForm.value,
      idCuenta: 'actual',
      estado: true
    };

    this.serviceMiembro.postMiembros(this.dataMiembros).subscribe(
      (data) => {
        console.log(data);

      }
    );

  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
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




