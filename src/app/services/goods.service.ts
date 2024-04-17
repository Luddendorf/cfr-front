import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterGood } from '../main/shared/interfaces/good/filter-good';
import { Good } from '../main/shared/interfaces/good/good';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient) {}

  getGoods(filterGood: FilterGood): Observable<Good[]> {
    let params = new HttpParams();
    const filterKeys: string[] = Object.keys(filterGood);
    for (let i = 0; i < filterKeys.length; i++) {
      this.addParam(params, filterKeys[i], filterGood);
    }

    return this.http.get<Good[]>(`${environment.baseUrl}/goods`,
      {params: params});
  }

  private addParam(params: HttpParams, paramName: string, filter: any): void {
    if (Object.keys(filter).includes(paramName)) {
      params.set(paramName, filter[paramName]);
    }
  }
}
