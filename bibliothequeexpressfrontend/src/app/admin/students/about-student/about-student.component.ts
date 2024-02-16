import { Component } from '@angular/core';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.scss'],
})
export class AboutStudentComponent {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Student'],
      active: 'Profile',
    },
  ];
  constructor() {
    //constructor
  }
}
