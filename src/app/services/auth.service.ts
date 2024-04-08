import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders;
  token: string | undefined;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Client-Id', environment.clientId);
    this.headers.append('Client-Secret', environment.clientSecret);
  }

  getToken$(): Observable<string> {
    return this.http.get<any>(`${environment.baseUrl}/auth`,
      {headers: this.headers});
  }

  getToken(): string | undefined {
    if (!this.token) {
      this.getToken$().subscribe(token => {this.token = token;
        return this.token;});
    }
    return this.token;
  }
}