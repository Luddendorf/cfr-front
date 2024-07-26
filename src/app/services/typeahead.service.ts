import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeaheadResponse } from '../main/shared/interfaces/typeahead/typeahead-response';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { TypeaheadRequest } from '../main/shared/interfaces/typeahead/typeahead-request';

@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {

  constructor(private http: HttpClient) {}

  getSuggestions$(userSearchString: string): Observable<TypeaheadResponse> {
    let userCategory: string = 'adult male 30 years old';
    let userLogin: string = 'AdminsBestFriend';
    let typeaheadPayload: TypeaheadRequest = {
      userSearchString: userSearchString,
      userCategory: userCategory,
      userLogin: userLogin
    };
    return this.http.post<TypeaheadResponse>(`${environment.baseUrl}/suggestions`,
      typeaheadPayload);
  }

  getSuggestionsMock$(userSearchString: string): Observable<TypeaheadResponse> {
    return of({
      count: 10,
      hintSimple: [
        {name: 'fanta orange', href: 'www.google.com'},
        {name: 'fanta mandarin', href: 'www.google.com'},
        {name: 'fanta shokata', href: 'www.google.com'},
        {name: 'fanta lime', href: 'www.google.com'},
        {name: 'fanta peach', href: 'www.google.com'}
      ],
      hintInCategory: [
        {title: 'Beverages', name: 'fanta in category Beverages', href: 'www.google.com',
          id: '11111', topId: '11111'},
        {title: 'Bicycles', name: 'fanta in category Bicycles', href: 'www.google.com',
          id: '22222', topId: '22222'},
        {title: 'Computers', name: 'fanta in category Computers', href: 'www.google.com',
          id: '33333', topId: '33333'},
        {title: 'Sport', name: 'fanta in category Sport', href: 'www.google.com',
          id: '44444', topId: '44444'},
        {title: 'Entertainment', name: 'fanta in category Entertainment', href: 'www.google.com',
          id: '55555', topId: '55555'}
      ]
    });
  }
}