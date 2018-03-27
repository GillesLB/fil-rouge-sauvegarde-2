import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case } from '../model/case';
import { Vehicule } from '../model/vehicule';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class VehiculeService {
  vehicule: Vehicule;

  constructor(private http: HttpClient) { }

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${HOST}/vehicule`);
  }

  getVehicule(id: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${HOST}/vehicule/` + id);
  }

  createVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(`${HOST}/vehicule`, vehicule);
  }

  updateVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.put<Vehicule>(`${HOST}/vehicule/${vehicule.id}`, vehicule);
  }

  deleteVehicule(id: number): Observable<Vehicule> {
    return this.http.delete<Vehicule>(`${HOST}/vehicule/${id}`);
  }

  deleteVehiculeLink(idCase: number, idVehicule: number): Observable<any> {
    return this.http.delete<any>(`${HOST}/linkVehicule/${idCase}/${idVehicule}`);
  }
}
