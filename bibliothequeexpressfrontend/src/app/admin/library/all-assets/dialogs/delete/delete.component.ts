import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LibraryService } from '../../library.service';

export interface DialogData {
  id: number;
  no: string;
  title: string;
  subject: string;
}

@Component({
  selector: 'app-delete:not(d)',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public libraryService: LibraryService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.libraryService.deleteLibrary(this.data.id);
  }
}
