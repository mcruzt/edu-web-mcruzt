import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {CharacterComponent} from './character/character.component';
import {EpisodeComponent} from './episode/episode.component';
import {LocationComponent} from './location/location.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'character',
    component: CharacterComponent
  }, {
    path: 'location',
    component: LocationComponent
  }, {
    path: 'episode',
    component: EpisodeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
