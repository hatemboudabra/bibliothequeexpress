import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FeesService } from '../../fees.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Fees } from '../../fees.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

export interface DialogData {
  id: number;
  action: string;
  fees: Fees;
}

@Component({
  selector: 'app-form-dialog:not(b)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  feesForm: UntypedFormGroup;
  fees: Fees;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public feesService: FeesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      console.log(data.fees.date);
      this.dialogTitle = data.fees.sName;
      this.fees = data.fees;
    } else {
      this.dialogTitle = 'New Fees';
      const blankObject = {} as Fees;
      this.fees = new Fees(blankObject);
    }
    this.feesForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.fees.id],
      rollNo: [this.fees.rollNo, [Validators.required]],
      sName: [this.fees.sName, [Validators.required]],
      fType: [this.fees.fType, [Validators.required]],
      date: [
        formatDate(this.fees.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      invoiceNo: [this.fees.invoiceNo, [Validators.required]],
      pType: [this.fees.pType, [Validators.required]],
      status: [this.fees.status, [Validators.required]],
      amount: [this.fees.amount, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.feesService.addFees(this.feesForm.getRawValue());
  }
}
