import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PalettePickerComponent } from './components/palette-picker/palette-picker.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'palette-picker',
        component: PalettePickerComponent,
    },
    {
        path: 'forms',
        component: FormsComponent,
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
