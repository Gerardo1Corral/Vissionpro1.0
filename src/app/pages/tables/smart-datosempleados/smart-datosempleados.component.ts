import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartdatosempleadosService } from '../../../@core/data/smart-datosempleados.service';

@Component({
  selector: 'ngx-datosempleados-table',
  templateUrl: './smart-datosempleados.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartdatosempleadosComponent {
 
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
      Emple_AñoMes: {
        title: 'AñoMes',
        type: 'string',
      },
      Emple_Activo: {
        title: 'Activo',
        type: 'string',
      },
      Emple_CentrodeCosto: {
        title: 'C.Costo',
        type: 'string',
      },      
      Emple_Rut: {
        title: 'Rut_Empleados',
        type: 'string',
      },
      Emple_Sexo: {
        title: 'Sex',
        type: 'string',
      },
      Emple_FNacimiento: {
        title: 'FNacimiento',
        type: 'string',
      },

      Emple_Celular: {
        title: 'Celular',
        type: 'string',
      },
      Emple_FIngreso: {
        title: 'Fec_Ingreso',
        type: 'string',
      },
      Emple_Jornada: {
        title: 'Jornada',
        type: 'string',
      },
      Emple_Sueldo_Base: {
        title: 'Sueldo_Base',
        type: 'number',
      },
      Emple_Colación: {
        title: 'Colación',
        type: 'number',
      },
      Emple_Movilización: {
        title: 'Moviliz',
        type: 'number',
      },
      Emple_Cargas: {
        title: 'Cargas',
        type: 'number',
      },
      Emple_Afp: {
        title: 'Emple_Afp',
        type: 'string',
      },
      Emple_Afp_porcen: {
        title: 'Afp_porc',
        type: 'string',
      },
      Emple_Isapre: {
        title: 'Isapre',
        type: 'string',
      },
      Emple_Isapre_porcen: {
        title: 'Isapre_porc',
        type: 'string',
      },
      Emple_Seg_Cesantía: {
        title: 'Seg_Cesan',
        type: 'string',
      },
      Emple_Observaciones: {
        title: 'Observaciones.Observaciones.Observaciones',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartdatosempleadosService) {
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
