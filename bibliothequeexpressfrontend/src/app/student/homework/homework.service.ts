import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Homework } from './homework.modal';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeworkService {
  private readonly API_URL = 'assets/data/stdHomework.json';

  dataChange: BehaviorSubject<Homework[]> = new BehaviorSubject<Homework[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Homework;

  constructor(private httpClient: HttpClient) {}

  get data(): Homework[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllHomework(): Observable<Homework[]> {
    return this.httpClient.get<Homework[]>(this.API_URL);
  }

  addHomework(homework: Homework): void {
    this.dialogData = homework;

    // this.httpClient.post(this.API_URL, homework)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = homework;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }

  updateHomework(homework: Homework): void {
    this.dialogData = homework;

    // this.httpClient.put(this.API_URL + homework.id, homework)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = homework;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }

  deleteHomework(id: number): void {
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
