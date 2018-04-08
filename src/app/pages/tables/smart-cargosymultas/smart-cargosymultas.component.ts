import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartcargosymultasService } from '../../../@core/data/smart-cargosymultas.service';

@Component({
  selector: 'ngx-cargosymultas-table',
  templateUrl: './smart-cargosymultas.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartcargosymultasComponent {
 
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
      Multas_fec_Contab: {
        title: 'Fec_Cont',
        type: 'string',
      },
      Multas_Depto: {
        title: 'Depto',
        type: 'string',
      },
      Multas_Descripcion: {
        title: 'Descripcion.Multa.Descripcion',
        type: 'string',
      },      
      Multas_Valor: {
        title: 'Valor$$',
        type: 'string',
      },
      Multas_Fecha: {
        title: 'Fecha.Multa',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartcargosymultasService) {
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
