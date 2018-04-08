import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartprorratService } from '../../../@core/data/smart-prorrat.service';

@Component({
  selector: 'ngx-prorrat-table',
  templateUrl: './smart-prorrat.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartprorratComponent {
 
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
      Unidad: {
        title: 'Unidad',
        type: 'string',
      },
      Copropietario: {
        title: 'Copropietario',
        type: 'string',
      },
      Residente: {
        title: 'Propietario/Residente',
        type: 'string',
      },      
      Email: {
        title: 'E-mail',
        type: 'string',
      },
      Factor: {
        title: 'Factor',
        type: 'string',
      },
      Saldo: {
        title: 'Saldo',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartprorratService) {
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
