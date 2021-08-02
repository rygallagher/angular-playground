import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JikanAnime } from 'src/app/models/jikan_anime.model';
import { JikanCharacter } from 'src/app/models/jikan_character.model';
import { JikanAnimeService } from 'src/app/services/jikan_anime_service.service';

@Component({
  selector: 'jikan-anime',
  templateUrl: './jikan-anime.component.html',
  styleUrls: ['./jikan-anime.component.scss']
})
export class JikanAnimeComponent implements OnInit {

    id!: number;
    anime!: JikanAnime;
    characters!: JikanCharacter;
    
    loading = false;
    loadingCharacters = false;

    get animeGenres(): string {
        return this?.anime?.genres?.map(x => x.name).join(' | ') ?? '';
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private jikanAnimeService: JikanAnimeService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => { 
            const id = params.get('id');

            if (id != null) {
                this.id = Number.parseInt(id);
                this.getAnime();
                this.getCharacters();
            } else {
                this.router.navigate(['jikan']);
            }
        });
    }

    getAnime(): void {
        this.jikanAnimeService
            .details([this.id], new Map())
            .subscribe(anime => {
                this.anime = anime;
                this.loading = false;
            }, _ => {
                this.loading = false;
            });
    }

    getCharacters(): void {
        this.loadingCharacters = true;

        this.jikanAnimeService
            .charactersAndStaff([this.id], new Map())
            .subscribe(character => {
                this.characters = character;
                this.loadingCharacters = false;
            }, _ => {
                this.loadingCharacters = false;
            })
    }
}
