import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormdcomunidadComponent }   from './form-dcomunidad/form-dcomunidad.component';
import { FormecomunesComponent }   from './form-ecomunes/form-ecomunes.component';
import { FormicontactosComponent }   from './form-icontactos/form-icontactos.component';
import { FormcinteresesComponent }   from './form-cintereses/form-cintereses.component';
import { FormcfondoreservaComponent }   from './form-cfondoreserva/form-cfondoreserva.component';
import { FormcgastocomunComponent }   from './form-cgastocomun/form-cgastocomun.component';
import { FormcremuneracionesComponent }   from './form-cremuneraciones/form-cremuneraciones.component';
import { FormpermisosComponent }   from './form-permisos/form-permisos.component';

/*import { FormConciliacion } from './form-Conciliacion/form-Conciliacion';*/

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [{
    path: 'inputs',
    component: FormInputsComponent,
  }, {
    path: 'layouts',
    component: FormLayoutsComponent,
  },
  {
    path: 'dcomunidad',
    component: FormdcomunidadComponent,
  }, 
  {
    path: 'ecomunes',
    component: FormecomunesComponent,
  },
  {
    path: 'icontactos',
    component: FormicontactosComponent,
  }, 
  {
    path: 'cintereses',
    component: FormcinteresesComponent,
  }, 
  {
    path: 'cfondoreserva',
    component: FormcfondoreservaComponent,
  }, 
  {
    path: 'cgastocomun',
    component: FormcgastocomunComponent,
  },
  {
    path: 'cremuneraciones',
    component: FormcremuneracionesComponent,
  },

  {
    path: 'permisos',
    component: FormpermisosComponent,
  }, 
  

  /*
  {
    path: 'Conciliacion',
    component: FormConciliacion,
  }, 
  */
],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
  FormdcomunidadComponent,
  FormecomunesComponent,
  FormicontactosComponent,
  FormcinteresesComponent,
  FormcfondoreservaComponent,
  FormcgastocomunComponent,
  FormcremuneracionesComponent,
  FormpermisosComponent,

/*  FormConciliacion,  */
];
