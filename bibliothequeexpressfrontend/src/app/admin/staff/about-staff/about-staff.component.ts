import { Component } from '@angular/core';

@Component({
  selector: 'app-about-staff',
  templateUrl: './about-staff.component.html',
  styleUrls: ['./about-staff.component.scss'],
})
export class AboutStaffComponent {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Staff'],
      active: 'Profile',
    },
  ];
  constructor() {
    // constructor;
  }
}
