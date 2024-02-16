import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Students } from './students.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class StudentsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/students.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Students;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Students[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStudentss(): void {
    this.subs.sink = this.httpClient.get<Students[]>(this.API_URL).subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      },
    });
  }
  addStudents(students: Students): void {
    this.dialogData = students;

    // this.httpClient.post(this.API_URL, students)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = students;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateStudents(students: Students): void {
    this.dialogData = students;

    // this.httpClient.put(this.API_URL + students.id, students)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = students;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteStudents(id: number): void {
    console.log(id);

    // this.httpClient.delete(this.API_URL + id)
    //     .subscribe({
    //       next: (data) => {
    //         console.log(id);
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
}
