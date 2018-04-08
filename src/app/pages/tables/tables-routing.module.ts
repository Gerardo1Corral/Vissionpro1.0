import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { SmartxxxxxComponent } from './smart-xxxxx/smart-xxxxx.component'; 
import { SmartprorratComponent } from './smart-prorrat/smart-prorrat.component'; 
import { SmartconciliacionComponent } from './smart-conciliacion/smart-conciliacion.component'; 
import { SmartingresosGCComponent } from './smart-ingresosGC/smart-ingresosGC.component'; 
import { SmartegresosGCComponent } from './smart-egresosGC/smart-egresosGC.component'; 
import { SmartprovisionesComponent } from './smart-provisiones/smart-provisiones.component';
import { SmartcargosymultasComponent } from './smart-cargosymultas/smart-cargosymultas.component';
import { SmartestacionamientosComponent } from './smart-estacionamientos/smart-estacionamientos.component';
import { SmartbodegasComponent } from './smart-bodegas/smart-bodegas.component';
import { SmartusuariosComponent } from './smart-usuarios/smart-usuarios.component';
import { SmartfondoreservaComponent } from './smart-fondoreserva/smart-fondoreserva.component';
import { SmartconciliadorMAEComponent } from './smart-conciliadorMAE/smart-conciliadorMAE.component';
import { SmartgastocomunComponent } from './smart-gastocomun/smart-gastocomun.component';
import { SmartdatosempleadosComponent } from './smart-datosempleados/smart-datosempleados.component';
import { SmartdatosliquidacionesComponent } from './smart-datosliquidaciones/smart-datosliquidaciones.component';
import { SmartcopropietarioComponent } from './smart-copropietario/smart-copropietario.component'; 
import { SmartcentrodecostoComponent } from './smart-centrodecosto/smart-centrodecosto.component';
import { SmartcartasdecorteComponent } from './smart-cartasdecorte/smart-cartasdecorte.component';
import { SmartganttComponent } from './smart-gantt/smart-gantt.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [{
    path: 'smart-table', 
    component: SmartTableComponent,
    }, {
    path: 'smart-xxxxx',
    component: SmartxxxxxComponent,
    }, {
    path: 'smart-prorrat',
    component: SmartprorratComponent,
    }

    ,{
    path: 'smart-conciliacion',
    component: SmartconciliacionComponent,
    }

   ,{
    path: 'smart-ingresosGC',
    component: SmartingresosGCComponent,
    }
  
    ,{
    path: 'smart-egresosGC',
    component: SmartegresosGCComponent,
    }
    
    ,{
    path: 'smart-provisiones',
    component: SmartprovisionesComponent,
    }

   ,{
    path: 'smart-cargosymultas',
    component: SmartcargosymultasComponent,
    }

   ,{
    path: 'smart-estacionamientos',
    component: SmartestacionamientosComponent,
    }
     
    ,{
    path: 'smart-bodegas',
    component: SmartbodegasComponent,
    }

  ,{
    path: 'smart-usuarios',
    component: SmartusuariosComponent,
    }

   ,{
    path: 'smart-fondoreserva',
    component: SmartfondoreservaComponent,
    }
  
   ,{
    path: 'smart-conciliadorMAE',
    component: SmartconciliadorMAEComponent,
    }
  
   ,{
    path: 'smart-gastocomun',
    component: SmartgastocomunComponent,
    }
  
   ,{
    path: 'smart-datosempleados',
    component: SmartdatosempleadosComponent,
    }

   ,{
    path: 'smart-datosliquidaciones',
    component: SmartdatosliquidacionesComponent,
    }

   ,{
    path: 'smart-copropietario',
    component: SmartcopropietarioComponent,
    }
  
   ,{
    path: 'smart-centrodecosto',
    component: SmartcentrodecostoComponent,
    }

    ,{
      path: 'smart-cartasdecorte',
      component: SmartcartasdecorteComponent,
     }

     ,{
      path: 'smart-gantt',
      component: SmartganttComponent,
     }

    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  SmartxxxxxComponent,
  SmartprorratComponent,
  SmartconciliacionComponent,
  SmartingresosGCComponent,
  SmartegresosGCComponent,
  SmartprovisionesComponent,
  SmartcargosymultasComponent,
  SmartestacionamientosComponent,
  SmartbodegasComponent,
  SmartusuariosComponent,
  SmartfondoreservaComponent,
  SmartconciliadorMAEComponent,
  SmartgastocomunComponent,
  SmartdatosempleadosComponent,
  SmartdatosliquidacionesComponent,
  SmartcopropietarioComponent,
  SmartcentrodecostoComponent,
  SmartcartasdecorteComponent,
  SmartganttComponent,
];

