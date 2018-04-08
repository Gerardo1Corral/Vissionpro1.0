import { Injectable } from '@angular/core';

@Injectable()
export class SmartcargosymultasService {

  data = [{
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	321 	',
    Multas_Descripcion: '	Inasistencia a Asamblea	',
    Multas_Valor: '	$10.000	',
    Multas_Fecha: '	06-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	309 	',
    Multas_Descripcion: '	Mal Estacionado	',
    Multas_Valor: '	$26.523	',
    Multas_Fecha: '	16-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	232 	',
    Multas_Descripcion: '	Colgar Ropa al Exterior	',
    Multas_Valor: '	$26.523	',
    Multas_Fecha: '	30-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	212 	',
    Multas_Descripcion: '	Cargos x Estacionamientos	',
    Multas_Valor: '	$3.000	',
    Multas_Fecha: '	06-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	401 	',
    Multas_Descripcion: '	Por quemar Herbidor	',
    Multas_Valor: '	$29.990	',
    Multas_Fecha: '	16-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	401 	',
    Multas_Descripcion: '	Por Romper Sillas	',
    Multas_Valor: '	$14.000	',
    Multas_Fecha: '	06-06-2017	',
      },{	
    Multas_fec_Contab: '	mar-18	',
    Multas_Depto: '	314 	',
    Multas_Descripcion: '	Por Romper Focos	',
    Multas_Valor: '	$16.000	',
    Multas_Fecha: '	16-06-2017	',

  }];

  getData() {
    return this.data;
  }
}
