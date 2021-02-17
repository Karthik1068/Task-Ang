import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldTransactionComponent } from './old-transaction.component';


const routes: Routes = [{ path: '', component: OldTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldTransactionRoutingModule { }
