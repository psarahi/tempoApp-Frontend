import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasComponent } from './cuentas.component';
import { Routes, RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  { path: '', component: CuentasComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CuentasComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CuentasModule { }
