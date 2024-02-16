import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teachers-routing.module';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { DeleteDialogComponent } from './all-teachers/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-teachers/dialogs/form-dialog/form-dialog.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { TeachersService } from './all-teachers/teachers.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
@NgModule({
  declarations: [
    AllTeachersComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    AboutTeacherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TeachersRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [TeachersService],
})
export class TeachersModule {}
