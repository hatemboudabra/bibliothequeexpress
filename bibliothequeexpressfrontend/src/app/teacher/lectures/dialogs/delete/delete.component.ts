import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LecturesService } from '../../lectures.service';

export interface DialogData {
  id: number;
  sName: string;
  class: string;
  date: string;
}

@Component({
  selector: 'app-delete:not(k)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public lecturesService: LecturesService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.lecturesService.deleteLectures(this.data.id);
  }
}
