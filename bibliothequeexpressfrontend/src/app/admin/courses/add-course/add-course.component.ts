import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  courseForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Course',
      items: ['Course'],
      active: 'Add Course',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.courseForm = this.fb.group({
      cName: ['', [Validators.required]],
      cCode: [''],
      cDetails: ['', [Validators.required]],
      sDate: ['', [Validators.required]],
      cTyme: ['', [Validators.required]],
      cPrice: ['', [Validators.required]],
      pName: ['', [Validators.required]],
      maxStds: [''],
      contactNo: ['', [Validators.required]],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
}
