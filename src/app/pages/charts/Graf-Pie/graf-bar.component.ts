import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-graf-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class GrafBarComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'MAyo'],
        datasets: [{
          data: [8992568, 5800415, 9915305, 10217133, 10593179],
          label: 'Depositos',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 80.8),
        }

        /*
        , {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        },  
        {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }  
      */
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
