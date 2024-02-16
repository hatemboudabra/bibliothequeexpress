import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StudentAttendanceService } from '../../attendance.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';
import { StudentAttendance } from '../../student-attendance.model';

export interface DialogData {
  id: number;
  action: string;
  studentAttendance: StudentAttendance;
}

@Component({
  selector: 'app-form-dialog:not(g)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  studentAttendanceForm: UntypedFormGroup;
  studentAttendance: StudentAttendance;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public studentAttendanceService: StudentAttendanceService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      console.log(data.studentAttendance.date);
      this.dialogTitle = data.studentAttendance.sName;
      this.studentAttendance = data.studentAttendance;
    } else {
      this.dialogTitle = 'New Attendance';
      const blankObject = {} as StudentAttendance;
      this.studentAttendance = new StudentAttendance(blankObject);
    }
    this.studentAttendanceForm = this.createContactForm();
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
    console.log(this.studentAttendance.id);
    return this.fb.group({
      id: [this.studentAttendance.id],
      img: [this.studentAttendance.img],
      rollNo: [this.studentAttendance.rollNo, [Validators.required]],
      sName: [this.studentAttendance.sName, [Validators.required]],
      class: [this.studentAttendance.class, [Validators.required]],
      date: [
        formatDate(this.studentAttendance.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      status: [this.studentAttendance.status, [Validators.required]],
      note: [this.studentAttendance.note],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentAttendanceService.addStudentAttendance(
      this.studentAttendanceForm.getRawValue()
    );
  }
}
