import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-graf-pie-DashBoard', 
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class GrafPieDashBoardComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Enero 2017', 'Febrero 2017', 'Marzo 2017', 'Abril 2017', 'Mayo 2017'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
             /* name: 'Ingresos',  */
            type: 'pie',
            radius: '80%',      /* Modifica el Radio */
            center: ['50%', '50%'],
            data: [
              { name: 'Enero 2017', value: 8992568 },
              { name: 'Febrero 2017', value: 5800415 },
              { name: 'Marzo 2017', value: 9915305 },
              { name: 'Abril 2017', value: 10217133 },
              { name: 'Mayo 2017', value: 10593179 },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
