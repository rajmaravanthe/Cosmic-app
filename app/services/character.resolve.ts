
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CosmicService } from './cosmic.service';

@Injectable()
export class CharacterResolve implements Resolve<any> {
    constructor(private cosmicService: CosmicService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] {
        let id = +route.params.id;
        let url = 'http://gateway.marvel.com/v1/public/characters/'+ id +'?'+ this.cosmicService.getUserKey();
        return this.cosmicService.getService(url);
    }
}