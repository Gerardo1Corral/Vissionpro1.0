import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartcartasdecorteService } from '../../../@core/data/smart-cartasdecorte.service';

@Component({
  selector: 'ngx-cartasdecorte-table',
  templateUrl: './smart-cartasdecorte.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartcartasdecorteComponent {
 
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
      Corte_Torre: {
        title: 'Torr',
        type: 'string',
      },
      Corte_Unidad: {
        title: 'Dept',
        type: 'string',
      },
      Corte_Residente: {
        title: 'Nombre.Residente.Nom',
        type: 'string',
      },      
      Corte_CorteDeLuz: {
        title: 'CorteTramite01',
        type: 'string',
      },
      Corte_Saldo: {
        title: 'Saldo',
        type: 'number',
      },
      Corte_Folio: {
        title: 'Folio',
        type: 'string',
      },
      Corte_Pagado: {
        title: 'Pagado',
        type: 'number',
      },
      Corte_FechaPago: {
        title: 'FechaPago',
        type: 'string',
      },
      Corte_Moroso: {
        title: 'Moroso',
        type: 'number',
      },
      Corte_CorteDeLuz2: {
        title: 'CorteTramite02',
        type: 'string',
      },
      Corte_Marca: {
        title: 'M',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartcartasdecorteService) {
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
