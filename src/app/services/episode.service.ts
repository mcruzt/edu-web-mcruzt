import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EpisodeModel} from '../models/episode.model';
import {ListModel} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  root: string;
  constructor(private http: HttpClient) {
    this.root = 'episode/';
  }
  getAll(page: number){
   return this.http.get<ListModel>(environment.apiUrl + this.root + '?page=' + page);
  }

  getById(id: number){
   return this.http.get<EpisodeModel>(environment.apiUrl + this.root + id);
  }
}
