import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic.component';
import { CharacterResolve } from './services/character.resolve';
import { ComicsResolve } from './services/comics.resolve';
import { ComicResolve } from './services/comic.resolve';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsResolve } from './services/creators.resolve';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: HomeComponent },
  { path: 'character/:id', component: CharacterComponent, resolve: {data: CharacterResolve}, data: {path: 'character/:id'} },
  { path: 'character/:id/comics', component: ComicsComponent, resolve: {data: ComicsResolve}, data: {path: 'character/:id/comics'} },
  { path: 'comics', component: ComicsComponent, resolve: {data: ComicsResolve} },
  { path: 'comics/:id', component: ComicComponent,  resolve: {data: ComicResolve}, data: {path: 'comic/:id'} },
   { path: 'comics/:id/creators', component: CreatorsComponent,  resolve: {data: CreatorsResolve}, data: {path: 'comics/:id/creators'} },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);