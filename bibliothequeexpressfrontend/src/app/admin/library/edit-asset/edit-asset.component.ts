import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss'],
})
export class EditAssetComponent {
  libraryForm: UntypedFormGroup;
  formdata = {
    no: 'BN5343534',
    title: 'Master In Java',
    subject: 'java',
    autherName: 'John Deo',
    publisher: 'xyz Publisher',
    department: 'computer',
    aType: 'book',
    date: '2020-02-17T14:22:18Z',
    price: '25$',
    status: 'in stock',
    details: 'Master in java is a good book for java learner.',
  };
  breadscrums = [
    {
      title: 'Edit Asset',
      items: ['Library'],
      active: 'Edit Asset',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.libraryForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.libraryForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      no: [this.formdata.no, [Validators.required]],
      title: [this.formdata.title, [Validators.required]],
      subject: [this.formdata.subject, [Validators.required]],
      autherName: [this.formdata.autherName],
      publisher: [this.formdata.publisher],
      department: [this.formdata.department, [Validators.required]],
      aType: [this.formdata.aType, [Validators.required]],
      date: [this.formdata.date, [Validators.required]],
      price: [this.formdata.price, [Validators.required]],
      status: [this.formdata.status],
      details: [this.formdata.details],
    });
  }
}
