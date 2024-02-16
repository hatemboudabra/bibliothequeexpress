import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent {
  proForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Teacher',
      items: ['Teacher'],
      active: 'Add Teacher',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.proForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
      designation: [''],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.proForm.value);
  }
}
