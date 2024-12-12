import { Component } from '@angular/core';
import { Vendedor } from '../common/models/vendedor.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recargas';
  vendedor: Vendedor | null = null;

  setVendedor(vendedor: Vendedor | null) {
    this.vendedor = vendedor;
  }
}
