import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto.component';
import { Routes, RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const routes: Routes = [
  { path: '', component: ProyectoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzLayoutModule
  ],
  exports: [RouterModule],
  declarations: [ProyectoComponent]
})
export class ProyectoModule { }
