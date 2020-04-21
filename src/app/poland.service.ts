import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolandService {

  private baseUrl = 'https://api.covid19api.com/dayone/country/poland/status/confirmed';

  constructor(private http: HttpClient) { }

  getPoland(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
