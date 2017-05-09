import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../services/auth.service';
import { CosmicService } from '../services/cosmic.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'character',
    templateUrl: 'app/character/character.template.html'
})

export class CharacterComponent {
    character = {};
    id;
    constructor(private auth: Auth, private cosmicService: CosmicService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.character = data.data[0]
            }
        );
    }
}