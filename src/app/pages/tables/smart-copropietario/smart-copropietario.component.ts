import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartcopropietarioService } from '../../../@core/data/smart-copropietario.service';

@Component({
  selector: 'ngx-copropietario-table',
  templateUrl: './smart-copropietario.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartcopropietarioComponent {
 
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
      Copro_unidad: {
        title: 'Unid',
        type: 'string',
      },
      Copro_propietario: {
        title: 'Nombre.CoPropietario',
        type: 'string',
      },
      Copro_email: {
        title: 'Email.CoPropietario.Email',
        type: 'string',
      },      
      Copro_fono: {
        title: 'Fono.CoProp.Fono',
        type: 'string',
      },
      Copro_celular: {
        title: 'Celu.CoProp.Celu.Co',
        type: 'string',
      },
      Copro_direccion: {
        title: 'Direccion.CoPropietario.Direccion.CoPropietario',
        type: 'number',
      },
      Resid_nombre: {
        title: 'Nombre.Residente.Nombre.Residente',
        type: 'number',
      },
      Resid_email: {
        title: 'Email.Residente.Email.Residente',
        type: 'number',
      },
      Resid_fono: {
        title: 'Fono.Residente.Fono',
        type: 'number',
      },
      Resid_celular: {
        title: 'Cel.Residente.Cel.Res',
        type: 'number',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartcopropietarioService) {
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
