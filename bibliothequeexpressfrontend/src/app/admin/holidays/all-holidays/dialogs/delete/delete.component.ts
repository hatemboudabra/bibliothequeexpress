import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { HolidayService } from '../../holiday.service';

export interface DialogData {
  id: number;
  no: string;
  title: string;
  sDate: string;
  eDate: string;
}

@Component({
  selector: 'app-delete:not(c)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public holidayService: HolidayService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.holidayService.deleteHoliday(this.data.id);
  }
}
