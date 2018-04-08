import { Injectable } from '@angular/core';

@Injectable()
export class SmartfondoreservaService {

  data = [{
    Freserv_N: '	10	',
    Freserv_Monto: '	-$1.968.260	',
    Freserv_Descipcion: '	Cheque 577526 Compra e Instalación de 2 Motores Sala de Bombas	',
    Freserv_Fecha: '	05-04-2017	',
    Freserv_Saldo: '	$249.664	',
      },{	
    Freserv_N: '	9	',
    Freserv_Monto: '	$253.914	',
    Freserv_Descipcion: '	Cheque 577440 Fondo Mutuo Diciembre 2016 (Banco Santander)	',
    Freserv_Fecha: '	17-03-2017	',
    Freserv_Saldo: '	$2.217.924	',
      },{	
    Freserv_N: '	8	',
    Freserv_Monto: '	$244.538	',
    Freserv_Descipcion: '	Cheque 577439 Fondo Mutuo Noviembre 2016 (Banco Santander)	',
    Freserv_Fecha: '	17-03-2017	',
    Freserv_Saldo: '	$1.964.010	',
      },{	
    Freserv_N: '	7	',
    Freserv_Monto: '	$247.241	',
    Freserv_Descipcion: '	Cheque 577438 Fondo Mutuo Octubre 2016 (Banco Santander)	',
    Freserv_Fecha: '	03-02-2017	',
    Freserv_Saldo: '	$1.719.472	',
      },{	
    Freserv_N: '	6	',
    Freserv_Monto: '	$257.558	',
    Freserv_Descipcion: '	Cheque 577437 Fondo Mutuo Septiembre 2016 (Banco Santander)	',
    Freserv_Fecha: '	03-02-2017	',
    Freserv_Saldo: '	$1.472.231	',
      },{	
    Freserv_N: '	5	',
    Freserv_Monto: '	$246.373	',
    Freserv_Descipcion: '	Cheque 577276 Fondo Mutuo Agosto 2016 (Banco Santander)	',
    Freserv_Fecha: '	21-09-2016	',
    Freserv_Saldo: '	$1.214.673	',
      },{	
    Freserv_N: '	4	',
    Freserv_Monto: '	$257.558	',
    Freserv_Descipcion: '	Cheque 577275 Fondo Mutuo Julio 2016 (Banco Santander)	',
    Freserv_Fecha: '	21-09-2016	',
    Freserv_Saldo: '	$968.300	',
      },{	
    Freserv_N: '	3	',
    Freserv_Monto: '	$248.336	',
    Freserv_Descipcion: '	Cheque 577203 Fondo Mutuo Junio 2016 (Banco Santander)	',
    Freserv_Fecha: '	20-07-2016	',
    Freserv_Saldo: '	$710.742	',
      },{	
    Freserv_N: '	2	',
    Freserv_Monto: '	$270.209	',
    Freserv_Descipcion: '	Cheque 577156 Fondo Mutuo Mayo 2016 (Banco Santander)	',
    Freserv_Fecha: '	03-06-2016	',
    Freserv_Saldo: '	$462.406	',
      },{	
    Freserv_N: '	1	',
    Freserv_Monto: '	$192.197	',
    Freserv_Descipcion: '	Cheque 577127 Fondo Mutuo Abril 2016 (Banco Santander)	',
    Freserv_Fecha: '	25-05-2016	',
    Freserv_Saldo: '	$192.197	',
    
  }];

  getData() {
    return this.data;
  }
}
