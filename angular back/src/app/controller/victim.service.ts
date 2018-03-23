import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case } from '../model/case';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class VictimService {

  constructor(private http: HttpClient) { }

}
