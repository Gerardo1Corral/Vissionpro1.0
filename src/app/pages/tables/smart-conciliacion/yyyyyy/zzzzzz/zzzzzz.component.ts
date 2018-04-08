import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
        </button>
        <button class="btn btn-md btn-primary" (click)="closeModal()">Volver</button>
    </div>

    <div class="modal-body">		
    <th>GASTOS.DE.ADMINISTRACIÓN		
    <small>	1.Gastos.Adm.-.Aguinaldo	</small>
    <small>	1.Gastos.Adm.-.Bonos	</small>
    <small>	1.Gastos.Adm.-.Finiquitos	</small>
    <small>	1.Gastos.Adm.-.Imposiciones	</small>
    <small>	1.Gastos.Adm.-.Otros Gastos	</small>
    <small>	1.Gastos.Adm.-.Reemplazos	</small>
    <small>	1.Gastos.Adm.-.Sueldos	</small>
    <small>	1.Gastos.Adm.-.Uniformes	</small>
    <small>	1.Gastos.Adm.-.Proyectos	</small>
    <small>	1.Gastos.Adm.-.Fondo Mutuo	</small>
    <small>	1.Gastos.Adm.-.Cuota Especial	</small>
    </th>		
    </div>

    <div class="modal-body">		
    <th>GASTOS.DE.MANTENCIÓN
    <small>	2.Mantención.-.Alcantarillados	</small>
    <small>	2.Mantención.-.Caja chica	</small>
    <small>	2.Mantención.-.Eléctrica	</small>
    <small>	2.Mantención.-.Iluminación	</small>
    <small>	2.Mantención.-.Otros Gastos	</small>
    <small>	2.Mantención.-.Piscina	</small>
    <small>	2.Mantención.-.Jardín	</small>
    <small>	2.Mantención.-.Porton	</small>
    <small>	2.Mantención.-.Gasfiter	</small>
    <small>	2.Mantención.-.Sala.de.bombas	</small>
    <small>	2.Mantención.-.Techos	</small>
    </th>		
    </div>		

    <div class="modal-body">		
    <th>GASTOS.DE.REPARACIÓN
    <small>	3.Reparación.-.Sala.de.Bombas	</small>
    <small>	3.Reparación.-.Cámaras	</small>
    <small>	3.Reparación.-.Jardín	</small>
    <small>	3.Reparación.-.Citofonos	</small>
    <small>	3.Reparación.-.Eléctricas	</small>
    <small>	3.Reparación.-.Otros Gastos	</small>
    <small>	3.Reparación.-.Techos	</small>
    </th>		
    </div>		

    <div class="modal-body">		
    <th>GASTOS.DE.CONSUMO
    <small>	4.Consumo.-.Gas	</small>
    <small>	4.Consumo.-.Agua.potable	</small>
    <small>	4.Consumo.-.Telefonía.e.Internet	</small>
    <small>	4.Consumo.-.Útiles de Aseo 	</small>
    <small>	4.Consumo.-.Insumos Jardín	</small>
    <small>	4.Consumo.-.Oficina/Impresión	</small>
    </th>		
    </div>		
        

    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Volver</button>
    </div>
  `,
})

/* {{ modalContent }}  */

export class ModalComponent {

  modalHeader: string;
  modalContent = `
  
    Gerardo Patricio Corral Mancila Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    ` 
    ;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
