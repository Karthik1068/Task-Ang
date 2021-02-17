import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NewTransactionServiceService } from '../services/new-transaction-service.service';
import { NewTransaction } from '../model/transaction.model';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})

export class NewTransactionComponent implements OnInit, OnDestroy {
  transForm: FormGroup;
  Issubmitted: boolean = false;
  newCustomerData: Subscription;
  newSubmitSubscription: Subscription;
  currencyList = ['AED', 'EUR', 'CHF', 'MUR', 'USD'];
  seqNo: any;
  validation_messages: any;
  uniqueNo: any = 1;
  customerData = [];
  custermerInfo: any;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public formbuilder: FormBuilder,
    private newTransService: NewTransactionServiceService,
    public dialog: MatDialog,
    private router: Router) 
    { 

    }

  get objectValue(): FormGroup { return this.transForm.get('newTransaction') as FormGroup; }

  ngOnDestroy() {
    if (this.newCustomerData) { this.newCustomerData.unsubscribe() };
    if (this.newSubmitSubscription) { this.newSubmitSubscription.unsubscribe() };
  }

  ngOnInit() {
    this.createForm();
  }

  /**
  * @description: Function for reference number generation
  * @author Karthik 
  * @returns The date format in YYYYMMDD
  **/
  yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
  }

  /**
  * @description: Function for form creation and 
  * Auto increment the reference number from local storage set & get
  * @author Karthik 
  **/
  createForm() {
    this.transForm = this.formBuilder.group({
      newTransaction: this.formBuilder.group(
        this.setTransactionDetails()
      )
    });
    let formatedDate: any = this.yyyymmdd();
    this.uniqueNo = (localStorage.getItem('id') ? localStorage.getItem('id') : 1);
    this.objectValue.patchValue({ ['reference']: (formatedDate + this.uniqueNo) });
  }

  /**
  * @description: From Validation
  * @author Karthik 
  **/
  setTransactionDetails() {
    return {
      phone: ['', Validators.required],
      transferAmt: ['', Validators.required],
      reference: [''],
      customerNo: [''],
      customerName: [''],
      address: [''],
      transferCurrency: [''],
      beneficiaryBank: ['', Validators.required],
      beneficiaryAcno: ['', Validators.required],
      paymentDetails: ['']
    }
  }

  back() {
    this.router.navigate(['home'])
  }

  /**
  * @description: Method for Logout function using mat-dialog popup
  * @author Karthik 
  **/
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "380px";
    dialogConfig.height = "220px";
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(LogoutComponent, dialogConfig);
  }

  /**
  * @description: Method to fetch old customer data using 'custometNumber' 
                  and fetch the phone number, customerName & address
  * @author Karthik 
  **/
  getData(custNo) {
    let custFound: boolean = false;
    this.newTransService.getCustomerJsonData().subscribe(customerData => {

      let sutomerArray: any = customerData['customers'];
      for (var idx in sutomerArray) {
        if (sutomerArray[idx]['custNo'] === custNo) {
          custFound = true;
          this.objectValue.patchValue({ ['phone']: sutomerArray[idx]['phone'] });
          this.objectValue.patchValue({ ['customerName']: sutomerArray[idx]['customerName'] });
          this.objectValue.patchValue({ ['address']: sutomerArray[idx]['address']});
        }
      }
      if (!custFound) {
        this.toastr.error("Customer Number Doesn't Exist");
        this.objectValue.patchValue({ ['phone']: ('') });
        this.objectValue.patchValue({ ['customerName']: ('') });
        this.objectValue.patchValue({ ['address']: ('') });
      }
    })
  }
  getCustomerData(event) {
    if (event.length >= 5) {
      this.getData(event);
    }
    else {
      if (event.length === 0) {
        this.objectValue.patchValue({ ['phone']: ('') });
        this.objectValue.patchValue({ ['customerName']: ('') });
        this.objectValue.patchValue({ ['address']: ('') });
      }
    }
  }

 /**
  * @description: New Transaction form submit with min validation and Update
  * @author Karthik 
  **/
  submitData() {
    this.Issubmitted = true;
    if (this.transForm.invalid) {
      return;
    }
    this.submitUserData();
  }
  submitUserData() {
    let customerData = {
      customerNo: this.objectValue.value['customerNo'],
      customerName: this.objectValue.value['customerName'],
      phone: this.objectValue.value['phone'],
      address: this.objectValue.value['address'],
    }
    this.uniqueNo = parseInt(this.uniqueNo) + 1;
    let a: any = this.uniqueNo
    localStorage.setItem('id', a);

    let newJson: any = {
      "referenceNo": 'CUS' + this.objectValue.value['reference'],
      "cusNumber": this.objectValue.value['customerNo'],
      "cusName": this.objectValue.value['customerName'],
      "cusAddress": this.objectValue.value['address'],
      "cusPhoneNo": this.objectValue.value['phone'],
      "amount": this.objectValue.value['transferAmt'],
      "currency": this.objectValue.value['transferCurrency'],
      "bankName": this.objectValue.value['beneficiaryBank'],
      "accountNo": this.objectValue.value['beneficiaryAcno'],
      "paymentInfo": this.objectValue.value['paymentDetails'],
    }      
    this.newTransService.submitNewTransaction(newJson).subscribe(data => {
    if (data['status']== 1) {
    this.toastr.success("New Transaction Completed");
    this.router.navigate(['home']);
    } (err) => {
      if (err.error == 0) {
        this.toastr.success("Error Occured");
      }
    }
  });
  }

  /**
  * @description: Method clear datas when user clicks Cancel Button
  * @author Karthik 
  **/
  cancelData() {
    this.objectValue.get('phone').clearValidators();
    this.objectValue.get('transferAmt').clearValidators();
    this.objectValue.patchValue({ ['customerNo']: ('') });
    this.objectValue.patchValue({ ['phone']: ('') });
    this.objectValue.patchValue({ ['customerName']: ('') });
    this.objectValue.patchValue({ ['address']: ('') });
    this.objectValue.patchValue({ ['transferAmt']: ('') });
    this.objectValue.patchValue({ ['transferCurrency']: ('') });
    this.objectValue.patchValue({ ['beneficiaryBank']: ('') });
    this.objectValue.patchValue({ ['beneficiaryAcno']: ('') });
    this.objectValue.patchValue({ ['paymentDetails']: ('') });
  }

}
