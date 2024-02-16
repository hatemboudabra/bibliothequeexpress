import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from '@danielmoncada/angular-datetime-picker';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeworkComponent } from './homework/homework.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { DeleteDialogComponent as leaveDeleteComonent } from './leave-request/dialogs/delete/delete.component';
import { FormDialogComponent } from './leave-request/dialogs/form-dialog/form-dialog.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeworkService } from './homework/homework.service';
import { LeaveRequestService as stdLeaveReqService } from './leave-request/leave-request.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeworkComponent,
    LeaveRequestComponent,
    leaveDeleteComonent,
    FormDialogComponent,
    TimetableComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NgApexchartsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [HomeworkService, stdLeaveReqService],
})
export class StudentModule {}
