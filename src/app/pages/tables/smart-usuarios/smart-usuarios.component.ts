import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartusuariosService } from '../../../@core/data/smart-usuarios.service';

@Component({
  selector: 'ngx-usuarios-table',
  templateUrl: './smart-usuarios.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartusuariosComponent {
 
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
      Usuarios_email: {
        title: 'Email Ususario',
        type: 'string',
      },
      Usuarios_Tipo: {
        title: 'Tipo.Usuarios.Tipo.Usuarios_T',
        type: 'string',
      },
      Usuarios_Usuario: {
        title: 'Usuarios.Usuario',
        type: 'string',
      },      
      Usuarios_Pass: {
        title: 'Password',
        type: 'string',
      },
      Usuarios_Nombre: {
        title: 'Nombre.de.Usuario.Nombre',
        type: 'string',
      },
      Usuarios_Rut: {
        title: 'Rut.Usuarios',
        type: 'number',
      },
      Usuarios_Telefono: {
        title: 'Num.Teléfono',
        type: 'number',
      },
      Usuarios_Celular: {
        title: 'Num.Celular',
        type: 'number',
      },
      Usuarios_Direccion: {
        title: 'Usuarios_Direccion.Usuarios_Direccion.Usuarios',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartusuariosService) {
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
