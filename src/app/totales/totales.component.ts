import { Component } from '@angular/core';
import { RecargaService } from '../../common/services/recarga.service';

@Component({
  selector: 'app-totales',
  standalone: false,
  
  templateUrl: './totales.component.html',
  styleUrl: './totales.component.scss'
})
export class TotalesComponent {
  totales: any[] = [];
  displayedColumns: string[] = ['ID','operador', 'cantidad', 'total'];

  constructor(private recargaService: RecargaService) { }

  ngOnInit() {
    this.recargaService.getTotales().subscribe(totales => {
      this.totales = totales;
    });
  }
}
