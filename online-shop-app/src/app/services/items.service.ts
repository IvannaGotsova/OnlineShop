import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Items, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private apiService: ApiService) { }

  getItems = (url:string, params: PaginationParams): Observable<Items> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
  });
  };
}
