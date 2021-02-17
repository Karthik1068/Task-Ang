import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BlockCopyPasteDirective } from '../directives/transaction-directive.directive';

@NgModule({
  declarations: [LoginComponent, BlockCopyPasteDirective],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class LoginModule { }
