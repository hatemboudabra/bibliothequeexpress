import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaffAttendanceService } from './staff-attendance.service';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { StaffAttendance } from './staff-attendance.model';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.scss'],
})
export class StaffAttendanceComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  filterToggle = false;
  displayedColumns = [
    'img',
    'name',
    'check_in',
    'break',
    'check_out',
    'total',
    'status',
    'department',
  ];
  exampleDatabase?: StaffAttendanceService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<StaffAttendance>(true, []);
  id?: number;
  staffAttendance?: StaffAttendance;
  constructor(
    public httpClient: HttpClient,
    public staffAttendanceService: StaffAttendanceService
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
  }
  toggleStar(row: StaffAttendance) {
    console.log(row);
  }

  public loadData() {
    this.exampleDatabase = new StaffAttendanceService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }
}
export class ExampleDataSource extends DataSource<StaffAttendance> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: StaffAttendance[] = [];
  renderedData: StaffAttendance[] = [];
  constructor(
    public exampleDatabase: StaffAttendanceService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<StaffAttendance[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllStaffAttendances();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((staffAttendance: StaffAttendance) => {
            const searchStr = (
              staffAttendance.name +
              staffAttendance.check_in +
              staffAttendance.break +
              staffAttendance.check_out +
              staffAttendance.total +
              staffAttendance.status +
              staffAttendance.department
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  disconnect() {
    // disconnect
  }
  /** Returns a sorted copy of the database data. */
  sortData(data: StaffAttendance[]): StaffAttendance[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'check_in':
          [propertyA, propertyB] = [a.check_in, b.check_in];
          break;
        case 'break':
          [propertyA, propertyB] = [a.break, b.break];
          break;
        case 'check_out':
          [propertyA, propertyB] = [a.check_out, b.check_out];
          break;
        case 'total':
          [propertyA, propertyB] = [a.total, b.total];
          break;
        case 'status':
          [propertyA, propertyB] = [a.status, b.status];
          break;
        case 'department':
          [propertyA, propertyB] = [a.department, b.department];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
