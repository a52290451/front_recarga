import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recarga } from '../models/recarga.interface';
import { environment } from '../../environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class RecargaService {
    private apiUrl = environment.URL_RECARGAS_MID +'/recarga';

    constructor(private http: HttpClient) { }

    postUser(user: any): Observable<any> {
        return this.http.post(environment.URL_RECARGAS_MID + '/usuario', user);
    }

    getUserById(id_user: number): Observable<any[]> {
        return this.http.get<any>(environment.URL_RECARGAS_MID + '/usuario/' + id_user);
    }
    postRecarga(recarga: Recarga): Observable<any> {
        return this.http.post(this.apiUrl, recarga);
    }

    getAllrecargas(payload: string = ''): Observable<any[]> {
        return this.http.get<Recarga[]>(this.apiUrl + payload);
    }

    getTotales(payload: string = '/totales'): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + payload);
    }

    getUser(documento: number){
        this.http.get<any[]>(environment.URL_RECARGAS_MID + '/usuario/' + documento);
    }
}
