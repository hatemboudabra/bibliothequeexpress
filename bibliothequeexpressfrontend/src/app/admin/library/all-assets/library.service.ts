import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Library } from './library.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class LibraryService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/library.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Library[]> = new BehaviorSubject<Library[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Library;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Library[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLibrarys(): void {
    this.subs.sink = this.httpClient.get<Library[]>(this.API_URL).subscribe({
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
  addLibrary(library: Library): void {
    this.dialogData = library;

    // this.httpClient.post(this.API_URL, library)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = library;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateLibrary(library: Library): void {
    this.dialogData = library;

    // this.httpClient.put(this.API_URL + library.id, library)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = library;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteLibrary(id: number): void {
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
