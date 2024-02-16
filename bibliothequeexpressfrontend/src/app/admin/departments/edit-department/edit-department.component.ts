import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss'],
})
export class EditDepartmentComponent {
  departmentForm: UntypedFormGroup;
  formdata = {
    dName: 'mathematics',
    hod: 'Sanjay Shah',
    phone: '123456789',
    email: 'test@example.com',
    sYear: '1987-02-17T14:22:18Z',
    sCapacity: '230',
    details: 'Learn fashion designing course with proper guideline.',
  };
  breadscrums = [
    {
      title: 'Edit Department',
      items: ['Department'],
      active: 'Edit',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.departmentForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.departmentForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      dName: [this.formdata.dName, [Validators.required]],
      hod: [this.formdata.hod],
      phone: [this.formdata.phone, [Validators.required]],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      sYear: [this.formdata.sYear],
      sCapacity: [this.formdata.sCapacity],
      details: [this.formdata.details],
    });
  }
}
