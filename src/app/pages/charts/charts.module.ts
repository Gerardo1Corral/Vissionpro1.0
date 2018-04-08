import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartjsBarComponent } from './chartjs/chartjs-bar.component';

import { ChartjsBarGastosComponent } from './chartjs-Gastos/chartjs-barGastos.component';
        
import { ChartjsLineComponent } from './chartjs/chartjs-line.component';
import { ChartjsPieComponent } from './chartjs/chartjs-pie.component';
import { ChartjsMultipleXaxisComponent } from './chartjs/chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs/chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs/chartjs-radar.component';
import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './echarts/echarts-line.component';

import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';

import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { xxxxxxxMultipleXaxisComponent } from './xxxxxxx/xxxxxxx-xaxis.component';
import { ctacteingMultipleXaxisComponent } from './ctacteing/ctacteing-xaxis.component';
import { ctacteegrMultipleXaxisComponent } from './ctacteing/ctacteegr-xaxis.component';
import { gascompagMultipleXaxisComponent } from './ctacteing/gascompag-xaxis.component';
import { gascommorMultipleXaxisComponent } from './ctacteing/gascommor-xaxis.component';
import { ctacteaguaMultipleXaxisComponent } from './ctacteing/ctacteagua-xaxis.component';

import { GrafPieComponent } from './Graf-Pie/graf-pie.component';
import { Grafd3BarComponent } from './Graf-Pie/graf-d3-bar.component';
/*import { GrafBarComponent } from './Graf-Pie/graf-bar.component'; */


const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
  GrafPieComponent,
  Grafd3BarComponent,
 /* GrafBarComponent, */
  ChartjsBarGastosComponent,
  xxxxxxxMultipleXaxisComponent,
  ctacteingMultipleXaxisComponent,
  ctacteegrMultipleXaxisComponent,
  gascompagMultipleXaxisComponent,
  gascommorMultipleXaxisComponent,
  ctacteaguaMultipleXaxisComponent,
];

@NgModule({
  imports: [ThemeModule, ChartsRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule],
  declarations: [...routedComponents, ...components],
})
export class ChartsModule {}
