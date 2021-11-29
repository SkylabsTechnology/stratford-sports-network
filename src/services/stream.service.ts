import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private _http: HttpClient) {}

  PreCheckStream(url: string): Observable<HttpResponse<any>> {
    return this._http.get<any>(url);
  }
}
