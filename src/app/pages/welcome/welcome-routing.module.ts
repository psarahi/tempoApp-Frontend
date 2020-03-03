import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    // path: '', component: WelcomeComponent
    // , children: [
    //   { path: 'proyecto', loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule) }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
