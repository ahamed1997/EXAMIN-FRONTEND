
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { Paymentmode } from 'src/app/models/paymentmode.model';
import { PaymentUser } from 'src/app/models/paymentuser.model';
import { ToastrService } from 'ngx-toastr';

declare var datevalidation:any;

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {
  exampaymentRegisters: PaymentUser;
  result: string;
  myForm: FormGroup;
  paymenttype: string;
  list: PaymentUser;
  dummy: any;
  flag:any;
  temppayment:any;
  paymentmode: any;
  val: PaymentUser;
  minDate = new Date();
  maxDate = new Date(2022, 0, 1);
  paymentForm: FormGroup;
  paymentcredit:Paymentmode;
  res: string;
 
  submitted=false;
  submitPayment=false;
  constructor(private examenService:ExamenService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute,private formBuilder:FormBuilder) 
  {
    this.flag=false;
    this.exampaymentRegisters = new PaymentUser();
    this.paymentcredit = new Paymentmode();
    this.myForm = new FormGroup
    ({
        name: new FormControl(),
        email: new FormControl(),
        mobile: new FormControl(),
        aadharcardNumber: new FormControl(),
        testModel: new FormControl(),
        date: new FormControl(),


      });
      this.paymentForm = new FormGroup(
        {
          cardHolderName: new FormControl(),
          cardnumber: new FormControl(),
          cvv: new FormControl(),
          expiration: new FormControl(),
          expirations: new FormControl()
        });
   }
   
  get f() {return this.myForm.controls}
  get c(){return this.paymentForm.controls}
  showDetails() {
    this.submitted=true;
 
    if(this.myForm.invalid){
      return
    }
    if (this.myForm.valid) {

   
      this.exampaymentRegisters.name = this.myForm.value.name;
      this.exampaymentRegisters.email = this.myForm.value.email;

      this.exampaymentRegisters.mobile = this.myForm.value.mobile;

      this.exampaymentRegisters.aadharcardNumber = this.myForm.value.aadharcardNumber;

      this.exampaymentRegisters.TestModel = this.myForm.value.testModel;

      this.exampaymentRegisters.Testdate = this.myForm.value.date;
      this.exampaymentRegisters.Username = localStorage.getItem('loggeduser');

      this.dummy = 2;
      this.paymentmode = 2;
this.flag=true;
      this.list = this.exampaymentRegisters;
      console.log(' first list ', this.list)
     
    } else {
      this.result = "Please fill  all the Details";
    }
  }
  clickcredit() {
   
    this.dummy = 3;
   
    this.paymenttype = "Credit Card";

    
  }
  clickDebit() {
    this.dummy = 3;
  
    this.paymenttype = "Debit Card";
  }
  

  creditpayment(exampaymentRegisters) {
this.submitPayment = true;
    if (this.paymentForm.valid) {

      this.paymentcredit.cardHolderName = this.paymentForm.value.cardHolderName;

      this.paymentcredit.cardnumber = this.paymentForm.value.cardnumber;

      this.paymentcredit.cvv = this.paymentForm.value.cvv;

      this.paymentcredit.expiration = this.paymentForm.value.expiration;
      this.paymentcredit.expirations=this.paymentForm.value.expirations;
      this.examenService.addExamRegister(this.paymenttype, this.list).subscribe(data => {
        console.log('REGISTER RESULT', data);
        this.myRoutes.navigate(['userpage/login']);
        this.toastr.success('Test Registered Successfully! All the Best for exam');
      });

    }
  

  }

  back(){
    this.paymentmode = 9;
  }
  BackAfterPayment(){
    this.paymentmode = 3;
  }
  ngOnInit() {
    // datevalidation();
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(3)]],

      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required,Validators.pattern('[1-9]{1}[0-9]{9}')]],
      aadharcardNumber: ['', [Validators.required,Validators.pattern('[0-9]{16}')]],
      testModel: ['', [Validators.required]],
     date: ['', [Validators.required]]

    })
    this.paymentForm = this.formBuilder.group({
      cardHolderName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(3)]],
      cardnumber: ['', [Validators.required,Validators.pattern('[1-9]{16}')]],
      cvv: ['', [Validators.required,Validators.pattern('[1-9]{1}[0-9]{2}')]],
      expiration: ['', [Validators.required,Validators.pattern('(0[1-9]|1[012])')]],
      expirations: ['', [Validators.required,Validators.pattern('[1-9][0-9]')]]

    });
  }



  // public get name() {
  //   return this.myForm.get("name");

  // }

  // public get email() {
  //   return this.myForm.get("email");
  // }

  // public get mobile() {
  //   return this.myForm.get("mobile");
  // }

  // public get aadharcardNumber() {
  //   return this.myForm.get("aadharcardNumber");
  // }
  // public get testModel() {
  //   return this.myForm.get("testModel");
  // }
  // public get date() {
    
  //   return this.myForm.get("date");



  }


