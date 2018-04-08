import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-grafd3-bar',
  template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"    
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class Grafd3BarComponent implements OnDestroy {
/* GPCM Error en la carga  [scheme]="colorScheme" */
  results = [
    { name: 'Enero 2017', value: 8992568 },
    { name: 'Febrero 2017', value: 5800415 },
    { name: 'Marzo 2017', value: 9915305 },
    { name: 'Abril 2017', value: 10217133 },
    { name: 'Mayo 2017', value: 10593179 },
  ];  
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.warningLight, colors.infoLight, colors.dangerLight , colors.successLight , colors.primaryLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
