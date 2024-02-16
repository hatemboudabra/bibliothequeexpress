import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.scss'],
})
export class EditHolidayComponent {
  holidayForm: UntypedFormGroup;
  formdata = {
    no: '99',
    title: 'christmas Holiday',
    sDate: '2019-12-17T14:22:18Z',
    eDate: '2020-01-04T14:22:18Z',
    type: '1',
    details: 'christmas Holiday',
  };
  breadscrums = [
    {
      title: 'Edit Holiday',
      items: ['Fees'],
      active: 'Edit Holiday',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.holidayForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.holidayForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      no: [this.formdata.no, [Validators.required]],
      title: [this.formdata.title, [Validators.required]],
      sDate: [this.formdata.sDate, [Validators.required]],
      eDate: [this.formdata.eDate, [Validators.required]],
      type: [this.formdata.type, [Validators.required]],
      details: [this.formdata.details],
    });
  }
}
