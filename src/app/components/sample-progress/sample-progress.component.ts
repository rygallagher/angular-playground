import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'sample-progress',
  templateUrl: './sample-progress.component.html',
  styleUrls: ['./sample-progress.component.scss']
})
export class SampleProgressComponent { 
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    value = 50;
}
