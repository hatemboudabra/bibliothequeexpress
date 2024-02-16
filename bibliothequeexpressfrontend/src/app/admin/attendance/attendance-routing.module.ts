import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffAttendanceComponent,
  },
  {
    path: 'details',
    component: AttendanceDetailComponent,
  },
  {
    path: 'attendance-sheet',
    component: AttendanceSheetComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
