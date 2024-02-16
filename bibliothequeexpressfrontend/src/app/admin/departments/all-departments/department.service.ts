import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Department } from './department.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class DepartmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/department.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData!: Department;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Department[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartments(): void {
    this.subs.sink = this.httpClient.get<Department[]>(this.API_URL).subscribe({
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
  addDepartment(department: Department): void {
    this.dialogData = department;

    // this.httpClient.post(this.API_URL, department)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = department;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateDepartment(department: Department): void {
    this.dialogData = department;

    // this.httpClient.put(this.API_URL + department.id, department)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = department;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteDepartment(id: number): void {
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
