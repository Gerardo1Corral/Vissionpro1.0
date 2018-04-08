import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartcentrodecostoService } from '../../../@core/data/smart-centrodecosto.service';

@Component({
  selector: 'ngx-centrodecosto-table',
  templateUrl: './smart-centrodecosto.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartcentrodecostoComponent {
 
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
      Ccosto_Periodo: {
        title: 'Periodo.CC',
        type: 'string',
      },
      Ccosto_Concepto: {
        title: 'Concepto.Centro.de.Costo.Concepto.Centro',
        type: 'string',
      },
      Ccosto_ENERO: {
        title: 'ENERO',
        type: 'string',
      },      
      Ccosto_FEBRERO: {
        title: 'FEBRERO',
        type: 'string',
      },
      Ccosto_MARZO: {
        title: 'MARZO',
        type: 'string',
      },
      Ccosto_ABRIL: {
        title: 'ABRIL',
        type: 'number',
      },
      Ccosto_MAYO: {
        title: 'MAYO',
        type: 'number',
      },
      Ccosto_JUNIO: {
        title: 'JUNIO',
        type: 'number',
      },
      Ccosto_JULIO: {
        title: 'JULIO',
        type: 'number',
      },
      Ccosto_AGOSTO: {
        title: 'AGOSTO',
        type: 'number',
      },
      Ccosto_SEPTIEMBRE: {
        title: 'SEPTIEMBRE',
        type: 'number',
      },
      Ccosto_OCTUBRE: {
        title: 'OCTUBRE',
        type: 'number',
      },
      Ccosto_NOVIEMBRE: {
        title: 'NOVIEMBRE',
        type: 'number',
      },
      Ccosto_DICIEMBRE: {
        title: 'DICIEMBRE',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartcentrodecostoService) {
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
