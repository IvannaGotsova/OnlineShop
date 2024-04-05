import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private ApiService: ApiService) { }

  getItems = (url:string, params: any): Observable<any> => {
    return this.ApiService.get(url, params);
  }
}
