import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StaffService } from '../../staff.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Staff } from '../../staff.model';
import { formatDate } from '@angular/common';

export interface DialogData {
  id: number;
  action: string;
  staff: Staff;
}

@Component({
  selector: 'app-form-dialog:not(e)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  staffForm: UntypedFormGroup;
  staff: Staff;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public staffService: StaffService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.staff.name;
      this.staff = data.staff;
    } else {
      this.dialogTitle = 'New Staff';
      const blankObject = {} as Staff;
      this.staff = new Staff(blankObject);
    }
    this.staffForm = this.createContactForm();
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
      id: [this.staff.id],
      img: [this.staff.img],
      name: [this.staff.name],
      email: [
        this.staff.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      date: [
        formatDate(this.staff.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      designation: [this.staff.designation],
      address: [this.staff.address],
      mobile: [this.staff.mobile],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.staffService.addStaff(this.staffForm.getRawValue());
  }
}
