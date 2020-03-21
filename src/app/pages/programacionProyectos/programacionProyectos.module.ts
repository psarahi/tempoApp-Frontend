import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramacionProyectosComponent } from './programacionProyectos.component';
import { Routes, RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzMessageModule } from 'ng-zorro-antd/message';

const routes: Routes = [
  { path: '', component: ProgramacionProyectosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCardModule,
    NzGridModule,
    NzLayoutModule,
    NzAvatarModule,
    NzTableModule,
    NzMenuModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzDrawerModule,
    NzFormModule,
    NzSelectModule,
    NzInputNumberModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSwitchModule,
    NzMessageModule

  ],
  declarations: [ProgramacionProyectosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class ProgramacionProyectosModule { }
