import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReportComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
 // exports: [RouterModule],
  declarations: [ReportComponent]
})
export class ReportModule { }
