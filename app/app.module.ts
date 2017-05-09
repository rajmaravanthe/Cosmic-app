import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic.component';
import { CreatorsComponent } from './creators/creators.component';

import { CosmicService } from './services/cosmic.service';
import { CharacterResolve } from './services/character.resolve';
import { ComicsResolve } from './services/comics.resolve';
import { ComicResolve } from './services/comic.resolve';
import { CreatorsResolve } from './services/creators.resolve';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharacterComponent,
        ComicsComponent,
        ComicComponent,
        CreatorsComponent
    ],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        CosmicService,
        CharacterResolve,
        ComicsResolve,
        ComicResolve,
        CreatorsResolve
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
