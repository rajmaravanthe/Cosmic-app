
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CosmicService } from './cosmic.service';

@Injectable()
export class CreatorsResolve implements Resolve<any> {
    url;
    constructor(private cosmicService: CosmicService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] {
        let id = +route.params.id;
        this.url = 'http://gateway.marvel.com/v1/public/comics/'+ id +'/creators?'+ this.cosmicService.getUserKey();
        return this.cosmicService.getService(this.url);
    }
}