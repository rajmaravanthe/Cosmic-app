import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../services/auth.service';
import { CosmicService } from '../services/cosmic.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'comics',
    templateUrl: 'app/comics/comics.template.html'
})

export class ComicsComponent {
    comics = [];
    characterID;
    url;
    constructor(private auth: Auth, private cosmicService: CosmicService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.comics = data.data;
            }
        );
    }
}