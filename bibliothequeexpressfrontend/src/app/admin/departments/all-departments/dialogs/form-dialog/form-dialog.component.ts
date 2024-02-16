import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DepartmentService } from '../../department.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Department } from '../../department.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export interface DialogData {
  id: number;
  action: string;
  department: Department;
}

@Component({
  selector: 'app-form-dialog:not(a)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  departmentForm: UntypedFormGroup;
  department: Department;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public departmentService: DepartmentService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.department.dName;
      this.department = data.department;
    } else {
      this.dialogTitle = 'New Department';
      const blankObject = {} as Department;
      this.department = new Department(blankObject);
    }
    this.departmentForm = this.createContactForm();
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
      id: [this.department.id],
      dName: [this.department.dName, [Validators.required]],
      hod: [this.department.hod, [Validators.required]],
      phone: [this.department.phone, [Validators.required]],
      email: [
        this.department.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      sYear: [this.department.sYear, [Validators.required]],
      sCapacity: [this.department.sCapacity, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departmentService.addDepartment(this.departmentForm.getRawValue());
  }
}
