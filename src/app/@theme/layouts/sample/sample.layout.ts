import { Component, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

import { StateService } from '../../../@core/data/state.service';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
    <nb-layout [center]="layout.id === 'center-column'" windowMode>
      <nb-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [right]="sidebar.id === 'right'">
        <nb-sidebar-header>
          <a href="#/pages/dashboard" class="btn btn-hero-success main-btn">
            <i class="fa fa-low-vision icon-menu"></i> <span>MARZO 2018</span>
          </a>
        </nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column left class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
        <nb-menu [items]="subMenu"></nb-menu>
      </nb-layout-column>

      <nb-layout-column right class="small" *ngIf="layout.id === 'three-column'">
        <nb-menu [items]="subMenu"></nb-menu>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

      <nb-sidebar class="settings-sidebar"
                   tag="settings-sidebar"
                   state="collapsed"
                   fixed
                   [right]="sidebar.id !== 'right'">
        <ngx-theme-settings></ngx-theme-settings>
      </nb-sidebar>
    </nb-layout>
  `,
})
export class SampleLayoutComponent  implements OnDestroy {

  subMenu: NbMenuItem[] = [
    {
      title: 'MENU PRUEBAS GPCM',
      group: true,
    },
    {
      title: 'BOTONES',
      icon: 'ion ion-android-radio-button-off',
    },
    {
      title: 'Buttons',
      link: '/pages/ui-features/buttons',
    },
    {
      title: 'Grid',
      link: '/pages/ui-features/grid',
    },
    {
      title: 'Icons',
      link: '/pages/ui-features/icons',
    },
    {
      title: 'Modals',
      link: '/pages/ui-features/modals',
    },
    {
      title: 'Typography',
      link: '/pages/ui-features/typography',
    },

    
    {
      title: 'Typotarjeta',
      link: '/pages/ui-features/typotarjeta',
    },
  

    {
      title: 'Animated Searches',
      link: '/pages/ui-features/search-fields',
    },
    {
      title: 'Tabs',
      link: '/pages/ui-features/tabs',
    },
    {
      title: 'FORMULARIOS',
      icon: 'ion ion-android-radio-button-off',
    },{
    title: 'FORMULARIOS',
    link: '/pages/forms/layouts',           /*   */    
    },
    {
    title: 'FORMULARIOS ENTRADA',
    link: '/pages/forms/inputs',            /*   */
    },
    {
    title: 'ARBOL',
    link: '/pages/components/tree',     /*   */
    },
    {
    title: 'TOSTADORA',
    link: '/pages/components/notifications',    /*   */
    },
    {
    title: 'EDITOR DE TEXTO 1',
    link: '/pages/editors/ckeditor',    /*   */
    },
    {
    title: 'EDITOR DE TEXTO 2', 
    link: '/pages/editors/tinymce',    /*   */
    },{
    title: 'TABLA INTELIGENTE',
    link: '/pages/tables/smart-table',     /* TABLA INTELIGENTE */
    },
  




      {
        title: 'GRÁFICOS',
        icon: 'ion ion-android-radio-button-off',
      },
        {
        title: 'GRAFICOS 1',
        link: '/pages/charts/echarts',
        },
        {
        title: 'GRAFICOS 2',
        link: '/pages/charts/chartjs', 
        },
        {
        title: 'GRAFICOS 3',
        link: '/pages/charts/d3',
        },        
        {
          title: 'Gráfico de xxxxxxx',
          link: '/pages/charts/xxxxxxx',
        },
        {
          title: 'Mi Cuenta',
          icon: 'ion ion-android-radio-button-off',
        },
        {
        title: 'Acceso Principal',
        link: '/auth/login',
        },
        {
        title: 'Registrarse',
        link: '/auth/register',
        },
        {
        title: 'Recuperar Password',
        link: '/auth/request-password',
        },
        {
        title: 'Cambiar Password',
        link: '/auth/reset-password',
        },
    

        {
          title: 'MAPAS',
          icon: 'ion ion-android-radio-button-off',
        },
        {
        title: 'GOOGLE MAPS',
        link: '/pages/maps/gmaps',     /*   */
        },
        {
        title: 'FOLLETO MAPAS',
        link: '/pages/maps/leaflet',   /*   */
        },
        {
        title: 'MAPA DE POBLACION',
        link: '/pages/maps/bubble',     /*   */
        }


    
  ];
  layout: any = {};
  sidebar: any = {};

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;

  constructor(protected stateService: StateService,
              protected menuService: NbMenuService,
              protected themeService: NbThemeService,
              protected bpService: NbMediaBreakpointsService,
              protected sidebarService: NbSidebarService) {
    this.layoutState$ = this.stateService.onLayoutState()
      .subscribe((layout: string) => this.layout = layout);

    this.sidebarState$ = this.stateService.onSidebarState()
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    const isBp = this.bpService.getByName('is');
    this.menuClick$ = this.menuService.onItemSelect()
      .withLatestFrom(this.themeService.onMediaQueryChange())
      .delay(20)
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });
  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
