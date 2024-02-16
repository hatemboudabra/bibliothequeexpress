import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DepartmentService } from '../../department.service';

export interface DialogData {
  id: number;
  dName: string;
  hod: string;
  phone: string;
}

@Component({
  selector: 'app-delete:not(a)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public departmentService: DepartmentService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.departmentService.deleteDepartment(this.data.id);
  }
}
