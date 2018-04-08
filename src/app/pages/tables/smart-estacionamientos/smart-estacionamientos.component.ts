import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartestacionamientosService } from '../../../@core/data/smart-estacionamientos.service';

@Component({
  selector: 'ngx-estacionamientos-table',
  templateUrl: './smart-estacionamientos.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartestacionamientosComponent {
 
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
      Estac_Num: {
        title: 'N.Est',
        type: 'string',
      },
      Estac_ROL: {
        title: 'ROL.Est',
        type: 'string',
      },
      Estac_FacProrrateo: {
      title: 'Fac.Prorrat',
      type: 'string',
      },
      Estac_Depto: {
        title: 'Depto',
        type: 'string',
      },      
      Estac_Propietario: {
        title: 'Nombre.Propietario.Nombre',
        type: 'string',
      },
      Estac_Arr_depto: {
        title: 'Arr_Dep',
        type: 'string',
      },
      Estac_Arr_Nombre: {
        title: 'Estac_Arr_Nombre',
        type: 'string',
      },

      Estac_Ubicacion: {
        title: 'Ubicacion.Estacionamiento',
        type: 'string',
      },

      Estac_Comentario: {
        title: 'Comentario.Estacionamientos',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartestacionamientosService) {
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
