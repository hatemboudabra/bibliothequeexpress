import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';

const routes: Routes = [
  {
    path: 'all-teachers',
    component: AllTeachersComponent,
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
  },
  {
    path: 'edit-teacher',
    component: EditTeacherComponent,
  },
  {
    path: 'about-teacher',
    component: AboutTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
