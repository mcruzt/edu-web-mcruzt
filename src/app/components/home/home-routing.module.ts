import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {CharacterComponent} from './character/character.component';
import {EpisodeComponent} from './episode/episode.component';
import {LocationComponent} from './location/location.component';
import {RegisterComponent} from '../auth/register/register.component';
import {AuthGuard} from '../../auth.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'character',
    component: CharacterComponent, canActivate: [AuthGuard]
  }, {
    path: 'location',
    component: LocationComponent, canActivate: [AuthGuard]
  }, {
    path: 'episode',
    component: EpisodeComponent, canActivate: [AuthGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
