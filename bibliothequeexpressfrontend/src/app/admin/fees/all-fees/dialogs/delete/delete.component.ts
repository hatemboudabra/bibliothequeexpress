import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FeesService } from '../../fees.service';

export interface DialogData {
  id: number;
  rollNo: string;
  sName: string;
  date: string;
  invoiceNo: string;
}

@Component({
  selector: 'app-delete:not(b)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public feesService: FeesService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.feesService.deleteFees(this.data.id);
  }
}
