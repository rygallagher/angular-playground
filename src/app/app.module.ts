import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu'; 
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio'; 
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider'; 

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarWidgetComponent } from './components/calendar-widget/calendar-widget.component';
import { TimeWidgetComponent } from './components/time-widget/time-widget.component';
import { JikanComponent } from './components/jikan/jikan.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { JikanAnimeComponent } from './components/jikan-anime/jikan-anime.component';
import { JikanMangaComponent } from './components/jikan-manga/jikan-manga.component';
import { PalettePickerComponent } from './components/palette-picker/palette-picker.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { SampleProgressComponent } from './components/sample-progress/sample-progress.component';
import { SampleButtonComponent } from './components/sample-button/sample-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    HomeComponent,
    CalendarWidgetComponent,
    TimeWidgetComponent,
    JikanComponent,
    JikanAnimeComponent,
    JikanMangaComponent,
    PalettePickerComponent,
    SampleFormComponent,
    SampleProgressComponent,
    SampleButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
