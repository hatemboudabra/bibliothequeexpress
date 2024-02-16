import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';

const routes: Routes = [
  {
    path: 'all-assets',
    component: AllAssetsComponent
  },
  {
    path: 'add-asset',
    component: AddAssetComponent
  },
  {
    path: 'edit-asset',
    component: EditAssetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
