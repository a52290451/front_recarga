import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../models/vendedor.interface';

@Injectable({
    providedIn: 'root'
})
export class VendedorService {
    private apiUrl = 'http://localhost:8081/api/v1/vendedor';

    constructor(private http: HttpClient) { }

    getVendedores(): Observable<Vendedor[]> {
        const vendendores: Vendedor[] = [
         //   { id_vendedor: 1, nombre: 'Nequi', direccion: '' },
         //   { id_vendedor: 2, nombre: 'Baloto', direccion: '' },
         //   { id_vendedor: 3, nombre: 'Efecty', direccion: '' },
        ];
     //   return of(vendendores);
        return this.http.get<Vendedor[]>(this.apiUrl);
    }
}
