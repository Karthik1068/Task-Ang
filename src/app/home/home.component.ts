import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public routeTo: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  /**
   @author : Karthik
   @description : User Logout function
  **/
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "380px";
    dialogConfig.height = "220px";
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(LogoutComponent, dialogConfig);
  }
}
