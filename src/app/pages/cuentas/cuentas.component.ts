import { Component, OnInit } from '@angular/core';
import { CuentaModel } from '../../Modelos/cuenta';
import { CuentaService } from '../../Servicios/cuenta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  listaCuentas: CuentaModel[];
  listOfDisplayData: CuentaModel[];

  constructor(
    private serviceCuentas: CuentaService
  ) { }

  ngOnInit() {
    // debugger;
    this.serviceCuentas.getCuenta().toPromise().then(
      (data: CuentaModel[]) => {
        this.listaCuentas = data;
        this.listaCuentas.forEach(element => {
          element.fechaRegistro = moment(element.fechaRegistro).format('YYYY-MM-DD')
        });
        this.listOfDisplayData = [...this.listaCuentas];
      }
    );

  }
}
