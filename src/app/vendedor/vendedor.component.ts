import { Component, EventEmitter, Output } from '@angular/core';
import { Vendedor } from '../../common/models/vendedor.interface';
import { VendedorService } from '../../common/services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  standalone: false,

  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.scss'
})
export class VendedorComponent {
  @Output() vendedorSeleccionado = new EventEmitter<Vendedor>();

  vendedores: Vendedor[] = [];

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
    this.vendedorService.getVendedores().subscribe(vendedores => {
      this.vendedores = vendedores;
    });
  }

  seleccionarVendedor(vendedor: Vendedor) {
    this.vendedorSeleccionado.emit(vendedor);
  }

}
