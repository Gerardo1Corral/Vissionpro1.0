import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartbodegasService } from '../../../@core/data/smart-bodegas.service';

@Component({
  selector: 'ngx-bodegas-table',
  templateUrl: './smart-bodegas.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartbodegasComponent {
 
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
      Bodega_Num: {
        title: 'Num',
        type: 'string',
      },
      Bodega_ROL: {
        title: 'ROL',
        type: 'string',
      },
      Bodega_FactorProrrat: {
        title: 'FacProrrat',
        type: 'string',
      },      
      Bodega_Depto: {
        title: 'Depto',
        type: 'string',
      },
      Bodega_Ubicación: {
        title: 'Bodega_Ubicación.Bodega_Ubicación',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartbodegasService) {
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
