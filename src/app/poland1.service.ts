import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Poland1Service {

  private baseUrl = 'https://api.apify.com/v2/datasets/L3VCmhMeX0KUQeJto/items?format=json&clean=1';

  constructor(private http: HttpClient) { }

  getPoland1(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
