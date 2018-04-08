import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartganttService } from '../../../@core/data/smart-gantt.service';

@Component({
  selector: 'ngx-gantt-table',
  templateUrl: './smart-gantt.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartganttComponent {
 
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
      Gantt_N: {
        title: 'N°',
        type: 'string',
      },
      Gantt_Estado: {
        title: 'Estado.Proy',
        type: 'string',
      },
      Gantt_Categoria: {
        title: 'Categ_Proy',
        type: 'string',
      },      
      Gantt_Prioridad: {
        title: 'Prior',
        type: 'string',
      },
      Gantt_Descripcion: {
        title: 'Descripcion.de.la.tarea.Descripcion.de.la.',
        type: 'string',
      },
      Gantt_Esfuerzo: {
        title: 'Esfuerzo',
        type: 'number',
      },
      Gantt_Costo: {
        title: 'Costo.Costo',
        type: 'number',
      },
      Gantt_FechaInicio: {
        title: 'FechaInicio',
        type: 'number',
      },
      Gantt_Responsable: {
        title: 'Responsable_Proy',
        type: 'number',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartganttService) {
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
