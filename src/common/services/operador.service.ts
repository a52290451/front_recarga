import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operador } from '../models/operador.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class OperadorService {
    private apiUrl = environment.URL_RECARGAS_MID + '/operador';

    constructor(private http: HttpClient) { }

    getOperadores(): Observable<Operador[]> {
        return this.http.get<Operador[]>(this.apiUrl);
    }
}
