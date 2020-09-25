import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LocationModel} from '../models/location.model';
import {ListModel} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  root: string;
  constructor(private http: HttpClient) {
    this.root = 'location/';
  }
  getAll(page: number){
    return this.http.get<ListModel>(environment.apiUrl + this.root + '?page=' + page);
  }

  getById(id: number){
    return this.http.get<LocationModel>(environment.apiUrl + this.root + id);
  }
}
