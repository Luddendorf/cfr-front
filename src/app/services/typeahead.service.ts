import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeaheadResponse } from '../main/shared/interfaces/typeahead/typeahead-response';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TypeaheadRequest } from '../main/shared/interfaces/typeahead/typeahead-request';
import { HistoryResponse } from '../main/shared/interfaces/typeahead/history-response';

@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {
  historyList$: BehaviorSubject<HistoryResponse[]> = new BehaviorSubject([{
    historyName: 'historyName', historyLink: 'www.google.com'}]);

  constructor(private http: HttpClient) {
    this.getHistoryItemsMock$('AdminsBestFriend').subscribe(historyList => {
      this.historyList$.next(historyList);
    });
  }

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
      count: 13,
      hintSimple: [
        {name: 'orange', href: 'www.google.com'},
        {name: 'mandarin', href: 'www.google.com'},
        {name: 'shokata', href: 'www.google.com'},
        {name: 'lime', href: 'www.google.com'},
        {name: 'peach', href: 'www.google.com'}
      ],
      hintCategory: [
        {name: 'Beverages', href: 'www.google.com'},
        {name: 'Bicycles', href: 'www.google.com'},
        {name: 'Computers', href: 'www.google.com'}
      ],
      hintInCategory: [
        { word: 'fanta', intermediatePhrase: 'in category', title: 'Beverages', href: 'www.google.com', id: '11111', topId: '11111'},
        { word: 'fanta', intermediatePhrase: 'in category', title: 'Bicycles', href: 'www.google.com', id: '22222', topId: '22222'},
        { word: 'fanta', intermediatePhrase: 'in category', title: 'Computers', href: 'www.google.com', id: '33333', topId: '33333'},
        { word: 'fanta', intermediatePhrase: 'in category', title: 'Entertainment', href: 'www.google.com', id: '44444', topId: '44444'},
        { word: 'fanta', intermediatePhrase: 'in category', title: 'Sport', href: 'www.google.com', id: '55555', topId: '55555'}
      ]
    });
  }

  getHistoryItems$(userLogin: string): Observable<HistoryResponse[]> {
    return this.http.post<HistoryResponse[]>(`${environment.baseUrl}/history`,
      { userLogin: userLogin });
  }

  getHistoryItemsMock$(userLogin: string): Observable<HistoryResponse[]> {
    return of([{historyName: 'Samsung', historyLink: 'www.google.com'}, 
      {historyName: 'Panasonic', historyLink: 'www.google.com'},
      {historyName: 'Toshiba', historyLink: 'www.google.com'},
      {historyName: 'Canon', historyLink: 'www.google.com'}]);
  }

  getHistory$(): Observable<HistoryResponse[]> {
    return this.historyList$.asObservable();
  }

  removeFromHistory$(recordsToRemove: string[]): Observable<string> {
    return this.http.post<string>(`${environment.baseUrl}/history/remove`,
      { recordsToRemove: recordsToRemove });
  }

  removeFromHistoryMock$(recordsToRemove: string[]): Observable<string> {
    return of('Successfully removed.');
  }
}