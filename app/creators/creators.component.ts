import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../services/auth.service';
import { CosmicService } from '../services/cosmic.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'creators',
    templateUrl: 'app/creators/creators.template.html'
})

export class CreatorsComponent {
    creators = [];
    constructor(private auth: Auth, private cosmicService: CosmicService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.creators = data.data;
            }
        );
    }
}