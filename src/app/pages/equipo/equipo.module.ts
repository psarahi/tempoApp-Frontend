import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EquipoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EquipoComponent]
})
export class EquipoModule { }
