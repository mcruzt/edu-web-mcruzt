import { Component, OnInit } from '@angular/core';
import {EpisodeService} from '../../../services/episode.service';
import {EpisodeModel} from '../../../models/episode.model';
import {DetailComponent} from './detail/detail.component';
import {MatDialog} from '@angular/material/dialog';
import {CharacterService} from '../../../services/character.service';
import {CharacterModel} from '../../../models/character.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  list: EpisodeModel[] = [];
  length = 0;
  pageSize = 20;
  pageEvent: PageEvent;
  constructor(private episodeService: EpisodeService, private characterService: CharacterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData({pageIndex: 0});
  }
  loadData(e): any {
    this.episodeService.getAll(e.pageIndex + 1).subscribe(
      resp => {
        this.list = resp.results;
        this.length = resp.info.count;
      },
      err => {
        console.log(err);
      }
    );
  }
  openDetail(characters: string[]) {
    const idsCharacters = [];
    const urlRemove = 'https://rickandmortyapi.com/api/character/';
    characters.forEach( (value) => {
      idsCharacters.push(value.replace(urlRemove, ''));

    });
    if (idsCharacters.length === 1) {
      this.characterService.getById(idsCharacters[0] * 1).subscribe(
        resp => {
          const list: Array<CharacterModel> = [];
          list.push(resp);
          this.showDialog(list);
        },
        err => {
          console.log(err);
        }
      );
    }else{
      this.characterService.getByIds(idsCharacters.toString()).subscribe(
        resp => {
          this.showDialog(resp);
        },
        err => {
          console.log(err);
        }
      );
    }

  }
  showDialog(list): void{
    this.dialog.open(DetailComponent, {
      data: list,
      width: '600px',
    });
  }

}
