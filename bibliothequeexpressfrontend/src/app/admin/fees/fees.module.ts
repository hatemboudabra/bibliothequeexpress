import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeesRoutingModule } from './fees-routing.module';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeeReceiptComponent } from './fee-receipt/fee-receipt.component';
import { DeleteDialogComponent } from './all-fees/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-fees/dialogs/form-dialog/form-dialog.component';
import { FeesService } from './all-fees/fees.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AllFeesComponent,
    AddFeesComponent,
    EditFeesComponent,
    FeeReceiptComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [FeesService],
})
export class FeesModule {}
