import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../models/vendedor.interface';
import { environment } from '../../environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class VendedorService {
    private apiUrl = environment.URL_RECARGAS_MID + '/vendedor';

    constructor(private http: HttpClient) { }

    getVendedores(): Observable<Vendedor[]> {
        return this.http.get<Vendedor[]>(this.apiUrl);
    }
}
