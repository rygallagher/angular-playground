import { Component, OnInit } from '@angular/core';
import { JikanTop } from 'src/app/models/jikan_top.model';
import { JikanTopService } from 'src/app/services/jikan_top_service.service';
import { TopType } from 'src/app/utils/constants/jikan_top_type.constant';

@Component({
  selector: 'jikan',
  templateUrl: './jikan.component.html',
  styleUrls: ['./jikan.component.scss']
})
export class JikanComponent implements OnInit {
    jikanTop!: JikanTop;

    loadingJikanTop = false;

    selectedTopType = TopType[0];
    
    page = 1;

    constructor(
        private jikanTopService: JikanTopService,
    ) { }

    ngOnInit(): void {
        this.loadTopAnime();
    }

    loadTop() {        
        if (this.selectedTopType == TopType[0]) {
            this.loadTopAnime();
        } else if (this.selectedTopType == TopType[1]) {
            this.loadTopManga();
        }
    }

    loadTopAnime(): void {
        this.loadingJikanTop = true;

        this.jikanTopService
            .get([TopType[0], this.page], new Map())
            .subscribe(jikanTop => {
                this.jikanTop = jikanTop;
                this.loadingJikanTop = false;
            }, _ => {
                this.loadingJikanTop = false;
            })
    }

    loadTopManga(): void {
        this.loadingJikanTop = true;

        this.jikanTopService
            .get([TopType[1], this.page], new Map())
            .subscribe(jikanTop => {
                this.jikanTop = jikanTop;
                this.loadingJikanTop = false;
            }, _ => {
                this.loadingJikanTop = false;
            })
    }

    previousPage(): void {
        this.page--;
        this.loadTop();
    }

    nextPage(): void {
        this.page++;
        this.loadTop();
    }
}
