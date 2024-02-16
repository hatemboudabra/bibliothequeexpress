import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { HolidayService } from '../../holiday.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Holiday } from '../../holiday.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

export interface DialogData {
  id: number;
  action: string;
  holiday: Holiday;
}

@Component({
  selector: 'app-form-dialog:not(c)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  holidayForm: UntypedFormGroup;
  holiday: Holiday;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public holidayService: HolidayService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.holiday.title;
      this.holiday = data.holiday;
    } else {
      this.dialogTitle = 'New Holiday';
      const blankObject = {} as Holiday;
      this.holiday = new Holiday(blankObject);
    }
    this.holidayForm = this.createContactForm();
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
      id: [this.holiday.id],
      no: [this.holiday.no, [Validators.required]],
      title: [this.holiday.title, [Validators.required]],
      sDate: [
        formatDate(this.holiday.sDate, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      eDate: [
        formatDate(this.holiday.eDate, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      type: [this.holiday.type, [Validators.required]],
      details: [this.holiday.details],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.holidayService.addHoliday(this.holidayForm.getRawValue());
  }
}
