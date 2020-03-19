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
  passwordVisible = false;
  visible = false;
  listaMiembros: MiembrosModel[];
  listOfDisplayData: MiembrosModel[];
  dataMiembros;


  // listOfControl: Array<{ id: number; controlInstance: string }> = [];

  // addField(e?: MouseEvent): void {
  //   if (e) {
  //     e.preventDefault();
  //   }
  //   const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

  //   const control = {
  //     id,
  //     controlInstance: `passenger${id}`
  //   };
  //   const index = this.listOfControl.push(control);
  //   console.log(this.listOfControl[this.listOfControl.length - 1]);
  //   this.validateForm.addControl(
  //     this.listOfControl[index - 1].controlInstance,
  //     new FormControl(null, Validators.required)
  //   );
  // }

  // removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
  //   e.preventDefault();
  //   if (this.listOfControl.length > 1) {
  //     const index = this.listOfControl.indexOf(i);
  //     this.listOfControl.splice(index, 1);
  //     console.log(this.listOfControl);
  //     this.validateForm.removeControl(i.controlInstance);
  //   }
  // }


  constructor(
    private serviceMiembro: MiembrosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.addField();
    this.serviceMiembro.getMiembros().toPromise().then(
      (data: MiembrosModel[]) => {
        this.listaMiembros = data;
        this.listOfDisplayData = [...this.listaMiembros];
      }
    );

    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]],
      correo: [null, [Validators.email, Validators.required]],
      costoHr: [null, [Validators.required]],
      expertis: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    // debugger;
    // console.log(this.validateForm.value);

    this.dataMiembros = {
      ...this.validateForm.value,
      idCuenta: 'actual'
    };

    this.serviceMiembro.postMiembros(this.dataMiembros).toPromise().then(
      (data: MiembrosModel) => {
         console.log(data);
        this.listOfDisplayData.push({ ...data });
        console.log(this.listOfDisplayData);

      }
    );

  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}

