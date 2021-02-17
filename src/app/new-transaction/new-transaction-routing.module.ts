import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTransactionComponent } from './new-transaction.component';

const routes: Routes = [{ path: '', component: NewTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTransactionRoutingModule { }
