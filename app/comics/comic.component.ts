import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../services/auth.service';
import { CosmicService } from '../services/cosmic.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'comic',
    templateUrl: 'app/comics/comic.template.html'
})

export class ComicComponent {
    comic = {};
    id;
    constructor(private auth: Auth, private cosmicService: CosmicService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.comic = data.data[0]
            }
        );
    }
}