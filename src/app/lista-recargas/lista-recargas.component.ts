import { Component } from '@angular/core';
import { RecargaService } from '../../common/services/recarga.service';
import { Recarga } from '../../common/models/recarga.interface';

@Component({
  selector: 'app-lista-recargas',
  standalone: false,
  
  templateUrl: './lista-recargas.component.html',
  styleUrl: './lista-recargas.component.scss'
})
export class ListaRecargasComponent {

  recargas: Recarga[] = [];
  displayedColumns: string[] = ['id', 'id_operador', 'monto', 'telefono', 'fecha', 'estado'];

  constructor(private recargaService: RecargaService) { }

  ngOnInit() {
    this.recargaService.getAllrecargas().subscribe(recargas => {
      this.recargas = recargas;
    });
  }
}
