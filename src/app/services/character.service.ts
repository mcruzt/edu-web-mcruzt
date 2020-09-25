import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {CharacterModel} from '../models/character.model';
import {ListModel} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  root: string;
  constructor(private http: HttpClient) {
    this.root = 'character/';
  }
  getAll(page: number){
   return  this.http.get<ListModel>(environment.apiUrl + this.root + '?page=' + page);
  }
  getById(id: number){
    return this.http.get<CharacterModel>(environment.apiUrl + this.root + id);
  }
  getByIds(ids: string){
    return this.http.get<CharacterModel>(environment.apiUrl + this.root + ids);
  }
}
