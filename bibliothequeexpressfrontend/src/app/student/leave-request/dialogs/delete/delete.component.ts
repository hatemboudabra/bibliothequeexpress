import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LeaveRequestService } from '../../leave-request.service';

export interface DialogData {
  id: number;
  class: string;
  section: string;
  applyDate: string;
}

@Component({
  selector: 'app-delete:not(j)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveRequestService: LeaveRequestService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.leaveRequestService.deleteLeaveRequest(this.data.id);
  }
}
