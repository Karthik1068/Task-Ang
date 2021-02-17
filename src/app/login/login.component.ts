import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mcblogin: FormGroup;
  submitted = false;
  loader: boolean;
  password: string = 'password';
  pass: any;
  passLength: any;
  saveAns: any;
  validation_messages: any;

  constructor(public formbuilder: FormBuilder,
    public routeTo: Router,
    private toastr: ToastrService
  ) {
    this.mcblogin = this.formbuilder.group({
      userId: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [false],
    });

    this.validation_messages = {
      userId: [
        { type: "required", message: "User Id is required." },
        { type: "pattern", message: "Enter a valid userId." }
      ],
      password: [
        { type: "required", message: "Password must be at least 5 characters." },
        { type: "pattern", message: "Enter a valid password." }
      ]
    };
  }

  ngOnInit() {
    
  }

  /**
   @author : Karthik
   @description : Function to show and hide password field for security.
  **/
  showHide() {
    if (this.password == "password") {
      this.password = "text";
    } else {
      this.password = "password";
    }
  }

   /**
   @author : Karthik
   @description : Method for Login and Cut, Copy, Paste functions are blocked using BlockCopyPasteDirective
  **/
  login() {
    if (this.mcblogin.get('password').value === 'admin') {
      if (this.mcblogin.get('userId').value === 'admin') {
        this.routeTo.navigate(['home'])
        localStorage.setItem('UserId', this.mcblogin.get('userId').value);
        this.toastr.success("Login Success");
      }
      else {
        this.toastr.error("Invalid Credentials");
      }
    } else {
      this.toastr.error("Invalid Credentials");
    }
  }
}