import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryRoutingModule } from './library-routing.module';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { DeleteDialogComponent } from './all-assets/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-assets/dialogs/form-dialog/form-dialog.component';
import { LibraryService } from './all-assets/library.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AllAssetsComponent,
    AddAssetComponent,
    EditAssetComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [LibraryService],
})
export class LibraryModule {}
