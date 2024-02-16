import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.scss'],
})
export class AddHolidayComponent {
  holidayForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Holiday',
      items: ['Fees'],
      active: 'Add Holiday',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.holidayForm = this.fb.group({
      no: ['', [Validators.required]],
      title: ['', [Validators.required]],
      sDate: ['', [Validators.required]],
      eDate: ['', [Validators.required]],
      type: ['', [Validators.required]],
      details: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.holidayForm.value);
  }
}
