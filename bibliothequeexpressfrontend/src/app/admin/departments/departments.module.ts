import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { DeleteDialogComponent } from './all-departments/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-departments/dialogs/form-dialog/form-dialog.component';
import { DepartmentService } from './all-departments/department.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AddDepartmentComponent,
    EditDepartmentComponent,
    AllDepartmentsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentsRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [DepartmentService],
})
export class DepartmentsModule {}
