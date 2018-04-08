import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartingresosGCService } from '../../../@core/data/smart-ingresosGC.service';

@Component({
  selector: 'ngx-ingresosGC-table',
  templateUrl: './smart-ingresosGC.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartingresosGCComponent {
 
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
      Ingreso_Manu: {
        title: 'TipoIng',
        type: 'string',
      },
      Ingreso_Monto: {
        title: 'Monto.Ing',
        type: 'number',
      },
      Ingreso_Transaccion: {
        title: 'Ingreso.Transaccion.Ingreso.Transaccion.Ingreso.Transaccion',
        type: 'string',
      },      
      Ingreso_Fecha: {
        title: 'Fecha.Ingreso',
        type: 'string',
      },
      Ingreso_FechaContable: {
        title: 'F.Contab',
        type: 'string',
      },
      Ingreso_Conciliacion: {
        title: 'Depto',
        type: 'string',
      },
      Ingreso_Folio: {
        title: 'Folio',
        type: 'string',
      },
      Ingreso_Concepto: {
        title: 'Concepto.por.Ingreso.Concepto.por.Ingreso',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartingresosGCService) {
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
