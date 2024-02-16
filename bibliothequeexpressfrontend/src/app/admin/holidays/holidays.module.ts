import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HolidaysRoutingModule } from './holidays-routing.module';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { AllHolidaysComponent } from './all-holidays/all-holidays.component';
import { EditHolidayComponent } from './edit-holiday/edit-holiday.component';
import { DeleteDialogComponent } from './all-holidays/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-holidays/dialogs/form-dialog/form-dialog.component';
import { HolidayService } from './all-holidays/holiday.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AddHolidayComponent,
    AllHolidaysComponent,
    EditHolidayComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HolidaysRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [HolidayService],
})
export class HolidaysModule {}
