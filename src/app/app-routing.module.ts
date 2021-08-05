import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JikanAnimeComponent } from './components/jikan-anime/jikan-anime.component';
import { JikanMangaComponent } from './components/jikan-manga/jikan-manga.component';
import { JikanComponent } from './components/jikan/jikan.component';
import { PalettePickerComponent } from './components/palette-picker/palette-picker.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'jikan',
        component: JikanComponent,
    },
    {
        path: 'jikan/anime/:id',
        component: JikanAnimeComponent,
    },
    {
        path: 'jikan/manga/:id',
        component: JikanMangaComponent,
    },
    {
        path: 'palette-picker',
        component: PalettePickerComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
