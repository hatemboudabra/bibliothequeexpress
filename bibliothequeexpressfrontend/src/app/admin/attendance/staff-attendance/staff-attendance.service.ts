import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StaffAttendance } from './staff-attendance.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class StaffAttendanceService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/staff-attendance.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<StaffAttendance[]> = new BehaviorSubject<
    StaffAttendance[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData!: StaffAttendance;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): StaffAttendance[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStaffAttendances(): void {
    this.subs.sink = this.httpClient
      .get<StaffAttendance[]>(this.API_URL)
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
}
