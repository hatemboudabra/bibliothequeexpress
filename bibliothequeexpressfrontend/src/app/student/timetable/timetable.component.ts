import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent {
  breadscrums = [
    {
      title: 'Timetable',
      items: ['Student'],
      active: 'Timetable',
    },
  ];

  constructor() {
    //constructor
  }
}
