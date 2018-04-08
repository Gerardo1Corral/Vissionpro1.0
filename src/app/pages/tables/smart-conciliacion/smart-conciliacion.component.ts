import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartconciliacionService } from '../../../@core/data/smart-conciliacion.service';
import { yyyyyyComponent } from './yyyyyy/yyyyyy.component';


@Component({
  selector: 'ngx-conciliacion-table',
  templateUrl: './smart-conciliacion.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartconciliacionComponent {
 
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
      CtaCte_Num: {
        title: 'N°',
        type: 'string',
      },
      CtaCte_Monto: {
        title: 'Monto',
        type: 'number',
      },
      CtaCte_Transaccion: {
        title: 'Descripción.de.la.Transacción.con.Detalle',
        type: 'string',
      },
      CtaCte_Fecha: {
        title: 'Fecha.Ingreso',
        type: 'string',
      },
      CtaCte_Saldo: {
        title: 'Saldo',
        type: 'string',
      },
      CtaCte_NDocumento: {
        title: 'N.Doc',
        type: 'string',
      },
      CtaCte_FechaContable: {
        title: 'F.Contab',
        type: 'string',
      },      
      CtaCte_Conciliacion: {
        title: 'Concilia',
        type: 'string',
      },
/*      CtaCte_EgresoGrupo: {
        title: 'Grupo',
        type: 'string',   
      }, */
      CtaCte_EgresoSubGrupo: {
        title: 'SubGrupo.SubGrupo.Sub',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartconciliacionService) {
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
