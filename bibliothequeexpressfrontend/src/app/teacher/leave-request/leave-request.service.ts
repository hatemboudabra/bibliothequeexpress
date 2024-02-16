import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeaveRequest } from './leave-request.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class LeaveRequestService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/leaveRequest.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<LeaveRequest[]> = new BehaviorSubject<
    LeaveRequest[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData!: LeaveRequest;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): LeaveRequest[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLeaveRequest(): void {
    this.subs.sink = this.httpClient
      .get<LeaveRequest[]>(this.API_URL)
      .subscribe({
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
  addLeaveRequest(leaveRequest: LeaveRequest): void {
    this.dialogData = leaveRequest;

    // this.httpClient.post(this.API_URL, leaveRequest)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = leaveRequest;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateLeaveRequest(leaveRequest: LeaveRequest): void {
    this.dialogData = leaveRequest;

    // this.httpClient.put(this.API_URL + leaveRequest.id, leaveRequest)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = leaveRequest;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteLeaveRequest(id: number): void {
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
