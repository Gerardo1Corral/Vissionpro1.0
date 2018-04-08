import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartgastocomunService } from '../../../@core/data/smart-gastocomun.service';

@Component({
  selector: 'ngx-gastocomun-table',
  templateUrl: './smart-gastocomun.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartgastocomunComponent {
 
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
      MaeGC_AnoMes: {
        title: 'Año Mes',
        type: 'string',
      },
      MaeGC_Num: {
        title: 'N°',
        type: 'string',
      },
      MaeGC_Torre: {
        title: 'T°',
        type: 'string',
      },      
      MaeGC_Unidad: {
        title: 'Unid',
        type: 'string',
      },
      MaeGC_Residente: {
        title: 'Copropietario.o.Residente',
        type: 'string',
      },
      MaeGC_Prorrat: {
        title: 'Prorr',
        type: 'number',
      },
      MaeGC_Saldo: {
        title: 'Saldo',
        type: 'number',
      },
      MaeGC_Folio: {
        title: 'Folio',
        type: 'string',
      },
      MaeGC_Pagado: {
        title: 'Pagado',
        type: 'number',
      },
      MaeGC_FechaPago: {
        title: 'FechaPago',
        type: 'string',
      },
      MaeGC_MaeGC_Moroso: {
        title: 'Moroso',
        type: 'number',
      },
      MaeGC_InteresMora: {
        title: 'Interes',
        type: 'number',
      },
      MaeGC_GastoComun: {
        title: 'G.Común',
        type: 'number',
      },
      MaeGC_FondoReserva: {
        title: 'F.Reserva',
        type: 'number',
      },
      MaeGC_Cuota: {
        title: 'Cuota',
        type: 'number',
      },
      MaeGC_Multas: {
        title: 'Multas',
        type: 'number',
      },
      MaeGC_EspaciosComunes: {
        title: 'E.Comunes',
        type: 'number',
      },
      MaeGC_CorteDeLuz: {
        title: 'CorteDeLuz',
        type: 'string',
      },
      MaeGC_TotalAPagar: {
        title: 'T. a Pagar',
        type: 'number',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartgastocomunService) {
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
