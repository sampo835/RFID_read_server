import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RfidDataComponent } from './rfid-data/rfid-data.component';

const routes: Routes = [{ path: '', component: RfidDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
