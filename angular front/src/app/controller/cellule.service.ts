import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Cellule } from '../model/cellule';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class CelluleService {

  constructor(private http: HttpClient) { }

  getCellules(): Observable<Cellule[]> {
    return this.http.get<Cellule[]>(`${HOST}/cellule`);
  }

  getCellule(id: number): Observable<Cellule> {
    return this.http.get<Cellule>(`${HOST}/cellule/${id}`);
  }

  createCellule(cellule: Cellule): Observable<Cellule> {
    return this.http.post<Cellule>(`${HOST}/cellule`, cellule);
  }

  deleteCellule(id: number): Observable<any> {
    console.log('test');
    return this.http.delete<any>(`${HOST}/cellule/${id}`);
  }
}
