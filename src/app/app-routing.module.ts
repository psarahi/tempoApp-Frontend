import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },

  {
    path: '',
    component: WelcomeComponent,
    children: [
      // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
      { path: 'proyecto', loadChildren: () => import('./pages/proyecto/proyecto.module').then(m => m.ProyectoModule) },
      { path: 'report', loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule) }
    ]
  }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
