import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   @author : Karthik
   @description : Logout function while user clicks 'yes' in the popup 
  **/
  submitYes(): void {
    localStorage.clear();
    this.toastr.success('Logout Successfully');
    this.router.navigate(['/']);
    this.dialogRef.close();
  }

  /**
   @author : Karthik
   @description : To close the dialog popup while user clicks 'No'
  **/
  submitNo(): void {
    this.dialogRef.close();
  }
}
