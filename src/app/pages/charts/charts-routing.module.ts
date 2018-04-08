import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ConxGrafpieComponent } from './Graf-Pie/ConxGraf-pie.component';
import { ChartjsGastosComponent } from './chartjs-Gastos/chartjsGastos.component';
import { xxxxxxxComponent } from './xxxxxxx/xxxxxxx.component';
import { ctacteingComponent } from './ctacteing/ctacteing.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }, {
    path: 'chartjs',
    component: ChartjsComponent,
  },  {
    path: 'Graf-Pie',
    component: ConxGrafpieComponent,
  },  {
    path: 'chartjs-Gastos',
    component: ChartjsGastosComponent,
  },
  {
    path: 'xxxxxxx',
    component: xxxxxxxComponent,
  },
  {
    path: 'ctacteing',
    component: ctacteingComponent,
  }

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  D3Component,
  ChartjsComponent,
  ConxGrafpieComponent,
  ChartjsGastosComponent,
  xxxxxxxComponent,
  ctacteingComponent,
];
