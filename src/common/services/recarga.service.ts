import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recarga } from '../models/recarga.interface';

@Injectable({
    providedIn: 'root'
})
export class RecargaService {
    private apiUrl = 'http://localhost:8081/api/v1/recarga';

    constructor(private http: HttpClient) { }

    postUser(user: any): Observable<any> {
        return this.http.post('http://localhost:8081/api/v1/usuario', user);
    }

    getUserById(id_user: number): Observable<any[]> {
        return this.http.get<any>('http://localhost:8081/api/v1/usuario/' + id_user);
    }
    postRecarga(recarga: Recarga): Observable<any> {
        return this.http.post(this.apiUrl, recarga);
    }

    getAllrecargas(payload: string = ''): Observable<any[]> {
        return this.http.get<Recarga[]>(this.apiUrl + payload);
    }

    getTotales(payload: string = ''): Observable<any[]> {
        const recargas: any[] = [
            { id_operador: 9, cantidad: 5, total: 99898 },
        ];
        return of(recargas);
        return this.http.get<any[]>(this.apiUrl + payload);
    }

    getUser(documento: number){
        this.http.get<any[]>("http://localhost:8081/api/v1/usuario/"+documento);
    }
}
