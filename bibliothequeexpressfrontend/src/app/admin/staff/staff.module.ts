import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffRoutingModule } from './staff-routing.module';
import { AllstaffComponent } from './all-staff/all-staff.component';
import { FormDialogComponent } from './all-staff/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './all-staff/dialog/delete/delete.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { StaffService } from './all-staff/staff.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
@NgModule({
  declarations: [
    AllstaffComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AddStaffComponent,
    EditStaffComponent,
    AboutStaffComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StaffRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [StaffService],
})
export class StaffModule {}
