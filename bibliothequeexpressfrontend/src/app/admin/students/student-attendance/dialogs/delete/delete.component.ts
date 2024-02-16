import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StudentAttendanceService } from '../../attendance.service';

export interface DialogData {
  id: number;
  rollNo: string;
  sName: string;
  date: string;
}

@Component({
  selector: 'app-delete:not(g)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public studentAttendanceService: StudentAttendanceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.studentAttendanceService.deleteStudentAttendance(this.data.id);
  }
}
