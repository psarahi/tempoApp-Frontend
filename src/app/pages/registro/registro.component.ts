import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CuentaModel, Cuenta } from '../../Modelos/cuenta';
import { CuentaService } from '../../Servicios/cuenta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  validateForm: FormGroup;
  dataCuenta;

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    // debugger;
    this.dataCuenta = {
      ...this.validateForm.value,
      fechaRegistro: moment().format('YYYY-MM-DD'),
      perfil: 'admin',
      estado: true
    };

    console.log(this.dataCuenta);

    this.serviceCuenta.postCuenta(this.dataCuenta).subscribe(
      (data) => {
        console.log(data);

      }
    );

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

  constructor(
    private fb: FormBuilder,
    private serviceCuenta: CuentaService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      correo: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      empresa: [null, [Validators.required]],
      lugar: [null, [Validators.required]]
    });
  }

}
