import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartegresosGCService } from '../../../@core/data/smart-egresosGC.service';

@Component({
  selector: 'ngx-agresosGC-table',
  templateUrl: './smart-egresosGC.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartegresosGCComponent {
 
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Egreso_Manu: {
        title: 'Manual',
        type: 'string',
      },
      Egreso_Monto: {
        title: 'Monto.Egres',
        type: 'string',
      },
      Egreso_Transaccion: {
        title: 'Egreso.Transaccion.Egreso.Transaccion',
        type: 'string',
      },      
      Egreso_Fecha: {
        title: 'Fec.Egreso',
        type: 'string',
      },
      Egreso_FechaContable: {
        title: 'F.Contab',
        type: 'string',
      },
      Egreso_Ndoc: {
        title: 'NumDocu',
        type: 'number',
      },
      Egreso_SubGrupo: {
        title: 'SubGrupo.SubGrupo.SubGrupo',
        type: 'number',
      },
      Egreso_Respaldo: {
        title: 'Respaldo',
        type: 'number',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartegresosGCService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
