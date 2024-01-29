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
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips'; 
import { DragDropModule } from '@angular/cdk/drag-drop'; 

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarWidgetComponent } from './components/calendar-widget/calendar-widget.component';
import { TimeWidgetComponent } from './components/time-widget/time-widget.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PalettePickerComponent } from './components/palette-picker/palette-picker.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { SampleProgressComponent } from './components/sample-progress/sample-progress.component';
import { SampleButtonComponent } from './components/sample-button/sample-button.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { QuestionTypeDialogComponent } from './components/question-type-dialog/question-type-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    HomeComponent,
    CalendarWidgetComponent,
    TimeWidgetComponent,
    PalettePickerComponent,
    SampleFormComponent,
    SampleProgressComponent,
    SampleButtonComponent,
    FormsComponent,
    FormQuestionComponent,
    QuestionTypeDialogComponent,
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
    MatChipsModule,
    ScrollingModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
