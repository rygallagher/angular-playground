import { Component } from '@angular/core';

@Component({
    selector: 'calendar-widget',
    templateUrl: './calendar-widget.component.html',
    styleUrls: ['./calendar-widget.component.scss']
})
export class CalendarWidgetComponent {
    date = new Date();
}
