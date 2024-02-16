import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-fees',
  templateUrl: './edit-fees.component.html',
  styleUrls: ['./edit-fees.component.scss'],
})
export class EditFeesComponent {
  feesForm: UntypedFormGroup;
  formdata = {
    rollNo: '99',
    sName: 'Jenish Shah	',
    fType: 'annual',
    department: 'mathematics',
    date: '2020-01-04T14:22:18Z',
    invoiceNo: 'IN-434454',
    pType: 'cheque',
    status: 'paid',
    amount: '320$',
    duration: 'yearly',
    details: 'Annual Tution Fees',
  };

  breadscrums = [
    {
      title: 'Edit Fees',
      items: ['Fees'],
      active: 'Edit Fees',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.feesForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.feesForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      rollNo: [this.formdata.rollNo, [Validators.required]],
      sName: [this.formdata.sName, [Validators.required]],
      fType: [this.formdata.fType, [Validators.required]],
      department: [this.formdata.department, [Validators.required]],
      date: [this.formdata.date, [Validators.required]],
      invoiceNo: [this.formdata.invoiceNo, [Validators.required]],
      pType: [this.formdata.pType, [Validators.required]],
      status: [this.formdata.status, [Validators.required]],
      amount: [this.formdata.amount, [Validators.required]],
      duration: [this.formdata.duration, [Validators.required]],
      details: [this.formdata.details],
    });
  }
}
