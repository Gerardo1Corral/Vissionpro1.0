import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { PlayerService } from './player.service';

import { SmartTableService } from './smart-table.service';
import { SmartxxxxxService } from './smart-xxxxx.service';
import { SmartprorratService } from './smart-prorrat.service';
import { SmartconciliacionService } from './smart-conciliacion.service';
import { SmartingresosGCService } from './smart-ingresosGC.service';
import { SmartegresosGCService } from './smart-egresosGC.service';
import { SmartprovisionesService } from './smart-provisiones.service';
import { SmartcargosymultasService } from './smart-cargosymultas.service';
import { SmartestacionamientosService } from './smart-estacionamientos.service';
import { SmartbodegasService } from './smart-bodegas.service';
import { SmartusuariosService } from './smart-usuarios.service';
import { SmartfondoreservaService } from './smart-fondoreserva.service';
import { SmartconciliadorMAEService } from './smart-conciliadorMAE.service';
import { SmartgastocomunService } from './smart-gastocomun.service';
import { SmartdatosempleadosService } from './smart-datosempleados.service';
import { SmartdatosliquidacionesService } from './smart-datosliquidaciones.service';
import { SmartcopropietarioService } from './smart-copropietario.service';
import { SmartcentrodecostoService } from './smart-centrodecosto.service';
import { SmartcartasdecorteService } from './smart-cartasdecorte.service';
import { SmartganttService } from './smart-gantt.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  PlayerService,
  SmartTableService,
  SmartxxxxxService,
  SmartprorratService,
  SmartconciliacionService,
  SmartingresosGCService,
  SmartegresosGCService,
  SmartprovisionesService,
  SmartcargosymultasService,
  SmartestacionamientosService,
  SmartbodegasService,
  SmartusuariosService,
  SmartfondoreservaService,
  SmartconciliadorMAEService,
  SmartgastocomunService,
  SmartdatosempleadosService,
  SmartdatosliquidacionesService,
  SmartcopropietarioService,
  SmartcentrodecostoService,
  SmartcartasdecorteService,
  SmartganttService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
