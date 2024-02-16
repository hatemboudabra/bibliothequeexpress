import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { StaffAttendanceService } from './staff-attendance/staff-attendance.service';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AttendanceSheetComponent,
    StaffAttendanceComponent,
    AttendanceDetailComponent,
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [StaffAttendanceService],
})
export class AttendanceModule {}
