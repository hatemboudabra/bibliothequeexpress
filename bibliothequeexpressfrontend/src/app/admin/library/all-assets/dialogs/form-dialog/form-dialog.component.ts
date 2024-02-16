import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LibraryService } from '../../library.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Library } from '../../library.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

export interface DialogData {
  id: number;
  action: string;
  library: Library;
}

@Component({
  selector: 'app-form-dialog:not(d)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  libraryForm: UntypedFormGroup;
  library: Library;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public libraryService: LibraryService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      console.log(data.library.date);
      this.dialogTitle = data.library.title;
      this.library = data.library;
    } else {
      this.dialogTitle = 'New Library Asset';
      const blankObject = {} as Library;
      this.library = new Library(blankObject);
    }
    this.libraryForm = this.createContactForm();
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
      id: [this.library.id],
      no: [this.library.no, [Validators.required]],
      title: [this.library.title, [Validators.required]],
      subject: [this.library.subject, [Validators.required]],
      date: [
        formatDate(this.library.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      department: [this.library.department, [Validators.required]],
      type: [this.library.type, [Validators.required]],
      status: [this.library.status, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.libraryService.addLibrary(this.libraryForm.getRawValue());
  }
}
