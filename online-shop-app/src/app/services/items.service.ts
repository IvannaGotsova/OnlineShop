import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Items, PaginationParams } from '../../types';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private ApiService: ApiService) { }

  getItems = (url:string, params: PaginationParams): Observable<Items> => {
    return this.ApiService.get(url, {
      params,
      responseType: "json",
  });
  }
}
