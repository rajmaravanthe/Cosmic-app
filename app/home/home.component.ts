import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth.service';
import { CosmicService } from '../services/cosmic.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.template.html'
})

export class HomeComponent {
  characters = [];
  constructor(private auth: Auth, private cosmicService: CosmicService, private router: Router) {
  }

  ngOnInit() {
    let url = 'http://gateway.marvel.com/v1/public/characters?' + this.cosmicService.getUserKey();
    this.cosmicService.getService(url).subscribe(
      data => {
        this.characters = data;
      }
    );
  }


};
