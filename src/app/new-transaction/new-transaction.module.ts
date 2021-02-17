import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransactionRoutingModule } from './new-transaction-routing.module';
import { NewTransactionComponent } from './new-transaction.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NumbersOnly, TextOnly } from '../directives/transaction-directive.directive';
import { NewTransaction } from '../model/transaction.model';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@NgModule({
  declarations: [NewTransactionComponent, NumbersOnly, TextOnly],
  imports: [
    CommonModule,
    NewTransactionRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [HttpClientModule],
})

export class NewTransactionModule { }
