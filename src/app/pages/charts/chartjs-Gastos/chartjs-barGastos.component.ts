import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chart2jsGastos-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarGastosComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;




      this.data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          data: [5433050, 5512677, 5320675, 6370943, 5289984, 5512677],
          label: 'G.Administración',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: [1256287, 895100, 1088307, 705650, 755760, 895100],
          label: 'G.Consumo',
          backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.8),
        }
      
        , {
          data: [1453323, 1650837, 1033131, 1154707, 833411, 1196950],
          label: 'G.Mantención',
          backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.8),
        }
        , {
          data: [1196950, 789667, 495703, 2633260, 2851320, 789667],
          label: 'G.Reparación',
          backgroundColor: NbColorHelper.hexToRgbA(colors.successLight, 0.8),
        }

      ],
      };




      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };


    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
