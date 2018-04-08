import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartdatosliquidacionesService } from '../../../@core/data/smart-datosliquidaciones.service';

@Component({
  selector: 'ngx-datosliquidaciones-table',
  templateUrl: './smart-datosliquidaciones.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartdatosliquidacionesComponent {
 
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
      Liqui_AñoMes: {
        title: 'AñoMes',
        type: 'string',
      },
      Liqui_Activo: {
        title: 'Activo',
        type: 'string',
      },
      Liqui_CentrodeCosto: {
        title: 'Centro de Costo',
        type: 'string',
      },      
      Liqui_Nombre: {
        title: 'Nombre_Empleado.Nombre_Empleado',
        type: 'string',
      },
      Liqui_Sueldo_Base: {
        title: 'Sueldo Base',
        type: 'number',
      },
      Liqui_Días_Trab: {
        title: 'DíasTrab',
        type: 'number',
      },
      Liqui_HrsExtrasNormal50: {
        title: 'HrsEx50',
        type: 'number',
      },
      Liqui_HrsExtrasEspecial100: {
        title: 'HrsEx100',
        type: 'number',
      },

      Liqui_Anticipo: {
        title: 'Anticipo',
        type: 'number',
      },

      Liqui_HrsAtraso: {
        title: 'HrsAtraso',
        type: 'number',
      },

      Liqui_Ptmo_CCAF: {
        title: 'Ptmo_CCAF',
        type: 'number',
      },

      Liqui_Cuota: {
        title: 'Cuota CCAF ',
        type: 'number',
      },

      Liqui_SueldoLiquido: {
        title: 'Sueldo Liquido',
        type: 'number',
      },

      Liqui_OBSERVACIONES: {
        title: 'Observaciones.Observaciones.Observaciones',
        type: 'number',
      },

      Liqui_Aguinaldo: {
        title: 'Aguinaldo',
        type: 'number',
      },

      Liqui_BonoCumpl: {
        title: 'Bono Cumplimiento',
        type: 'number',
      },

      Liqui_OtronoImponiblemas: {
        title: 'OtroImponible(+)',
        type: 'number',
      },

      Liqui_OtrosDsctosmenos: {
        title: 'OtrosDsctos(-)',
        type: 'number',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartdatosliquidacionesService) {
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
