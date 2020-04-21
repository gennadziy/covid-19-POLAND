import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BelarusService {

  private baseUrl = 'https://api.covid19api.com/dayone/country/belarus/status/confirmed';

  constructor(private http: HttpClient) { }

  getBelarus(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
