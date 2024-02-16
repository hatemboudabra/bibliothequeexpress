import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lectures } from './lectures.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class LecturesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/lectures.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Lectures[]> = new BehaviorSubject<Lectures[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Lectures;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Lectures[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLecturess(): void {
    this.subs.sink = this.httpClient.get<Lectures[]>(this.API_URL).subscribe({
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
  addLectures(lectures: Lectures): void {
    this.dialogData = lectures;

    // this.httpClient.post(this.API_URL, lectures)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = lectures;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateLectures(lectures: Lectures): void {
    this.dialogData = lectures;

    // this.httpClient.put(this.API_URL + lectures.id, lectures)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = lectures;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteLectures(id: number): void {
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
