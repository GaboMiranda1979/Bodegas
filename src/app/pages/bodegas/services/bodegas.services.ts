import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from '../interfaces/bodegas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private url = 'http://localhost:3000/bodegas';

  constructor(private http: HttpClient) { }

  getBodegas(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.url);
  }

  addBodega(bodega: Bodega): Observable<Bodega> {
    return this.http.post<Bodega>((this.url), bodega)
  }

  deleteBodega(bodegaId: any): Observable<Bodega> {
    const url = `${this.url}/${bodegaId}`;
    return this.http.delete<Bodega>(url);

  }

}

