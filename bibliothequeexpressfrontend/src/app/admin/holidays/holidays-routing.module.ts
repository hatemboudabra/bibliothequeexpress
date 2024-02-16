import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHolidaysComponent } from './all-holidays/all-holidays.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditHolidayComponent } from './edit-holiday/edit-holiday.component';

const routes: Routes = [
  {
    path: 'all-holidays',
    component: AllHolidaysComponent
  },
  {
    path: 'add-holiday',
    component: AddHolidayComponent
  },
  {
    path: 'edit-holiday',
    component: EditHolidayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule {}
