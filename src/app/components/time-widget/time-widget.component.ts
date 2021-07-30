import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeWidgetComponent {
    public time: Observable<Date> = timer(0, 100).pipe(map(() => new Date()));
}
