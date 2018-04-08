import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService} from '../../@core/data/smart-table.service';
import { SmartxxxxxService} from '../../@core/data/smart-xxxxx.service';
import { SmartprorratService} from '../../@core/data/smart-prorrat.service';
import { SmartconciliacionService} from '../../@core/data/smart-conciliacion.service';
import { SmartingresosGCService} from '../../@core/data/smart-ingresosGC.service';
import { SmartegresosGCService} from '../../@core/data/smart-egresosGC.service';
import { SmartprovisionesService} from '../../@core/data/smart-provisiones.service';
import { SmartcargosymultasService} from '../../@core/data/smart-cargosymultas.service';
import { SmartestacionamientosService} from '../../@core/data/smart-estacionamientos.service';
import { SmartbodegasService} from '../../@core/data/smart-bodegas.service';
import { SmartusuariosService} from '../../@core/data/smart-usuarios.service';
import { SmartfondoreservaService} from '../../@core/data/smart-fondoreserva.service';
import { SmartconciliadorMAEService} from '../../@core/data/smart-conciliadorMAE.service';
import { SmartgastocomunService} from '../../@core/data/smart-gastocomun.service';
import { SmartdatosempleadosService} from '../../@core/data/smart-datosempleados.service';
import { SmartdatosliquidacionesService} from '../../@core/data/smart-datosliquidaciones.service';
import { SmartcopropietarioService} from '../../@core/data/smart-copropietario.service';
import { SmartcentrodecostoService} from '../../@core/data/smart-centrodecosto.service';
import { SmartcartasdecorteService} from '../../@core/data/smart-cartasdecorte.service';
import { SmartganttService} from '../../@core/data/smart-gantt.service';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
],
  declarations: [
    ...routedComponents,
  ],
  providers: [
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
  ],
})
export class TablesModule { }
