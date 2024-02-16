import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeeReceiptComponent } from './fee-receipt/fee-receipt.component';

const routes: Routes = [
  {
    path: 'all-fees',
    component: AllFeesComponent
  },
  {
    path: 'add-fees',
    component: AddFeesComponent
  },
  {
    path: 'edit-fees',
    component: EditFeesComponent
  },
  {
    path: 'fee-receipt',
    component: FeeReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule {}
