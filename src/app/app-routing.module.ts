import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: 'proyecto', loadChildren: () => import('./pages/proyecto/proyecto.module').then(m => m.ProyectoModule) },
      { path: 'report', loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule) },
      { path: 'equipo', loadChildren: () => import('./pages/equipo/equipo.module').then(m => m.EquipoModule) },
      { path: 'cuentas', loadChildren: () => import('./pages/cuentas/cuentas.module').then(m => m.CuentasModule) },
      { path: 'actividades', loadChildren: () => import('./pages/actividades/actividades.module').then(m => m.ActividadesModule) },
      {
        path: 'programacionProyectos', loadChildren: () => import('./pages/programacionProyectos/programacionProyectos.module')
          .then(m => m.ProgramacionProyectosModule)
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
