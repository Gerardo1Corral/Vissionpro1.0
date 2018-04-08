import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartfondoreservaService } from '../../../@core/data/smart-fondoreserva.service';

@Component({
  selector: 'ngx-fondoreserva-table',
  templateUrl: './smart-fondoreserva.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartfondoreservaComponent {
 
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
      Freserv_N: {
        title: 'N°',
        type: 'string',
      },
      Freserv_Monto: {
        title: 'Monto.Fondo',
        type: 'string',
      },
      Freserv_Descipcion: {
        title: 'Descipcion.Fondo.de.Reserva.Descipcion.Fondo.de.Reserva.Descipcion',
        type: 'string',
      },      
      Freserv_Fecha: {
        title: 'Fecha.Fondo',
        type: 'string',
      },
      Freserv_Saldo: {
        title: 'Saldo',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartfondoreservaService) {
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
