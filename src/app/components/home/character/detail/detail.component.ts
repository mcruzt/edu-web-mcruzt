import {Component, Inject} from '@angular/core';
import {CharacterModel} from '../../../../models/character.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public item: CharacterModel) { }

}
