import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldTransactionRoutingModule } from './old-transaction-routing.module';
import { OldTransactionComponent } from './old-transaction.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material'

@NgModule({
  declarations: [OldTransactionComponent],
  imports: [
    CommonModule,
    OldTransactionRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class OldTransactionModule { }
