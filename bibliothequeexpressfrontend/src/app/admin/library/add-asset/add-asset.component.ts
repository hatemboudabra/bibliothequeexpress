import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
})
export class AddAssetComponent {
  libraryForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Asset',
      items: ['Library'],
      active: 'Add Asset',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.libraryForm = this.fb.group({
      no: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      autherName: [''],
      publisher: [''],
      department: ['', [Validators.required]],
      aType: ['', [Validators.required]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: [''],
      details: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.libraryForm.value);
  }
}
