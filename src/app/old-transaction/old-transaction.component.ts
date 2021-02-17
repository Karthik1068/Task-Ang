import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewTransactionServiceService } from '../services/new-transaction-service.service';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-old-transaction',
  templateUrl: './old-transaction.component.html',
  styleUrls: ['./old-transaction.component.css']
})
export class OldTransactionComponent implements OnInit {
  newTransactionlist: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private newTransService: NewTransactionServiceService,
  ) { }

  /**
   @author : Karthik
   @function : ngOnInit()
   @description : It is one of the lifecycle in angular. Getting all transaction list onload.
  **/
  ngOnInit() {
    this.getAllRecords();
  }

 /**
   @author : Karthik
   @description : Method for Logout
  **/
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "380px";
    dialogConfig.height = "220px";
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(LogoutComponent, dialogConfig);
  }
   /**
   @author : Karthik
   @description : Function for navigate to home page
  **/
  back() {
    this.router.navigate(['home'])
  }

  /**
  * @description: Method to get All Transaction List 
  * @author Karthik 
  **/
  getAllRecords() {
    this.newTransService.getAllTransaction().subscribe(data => {
      this.newTransactionlist = data['result'];
    });
  }
}
