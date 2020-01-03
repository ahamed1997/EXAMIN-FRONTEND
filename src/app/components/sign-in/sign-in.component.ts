import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errormessage:any;
  user:User;
  angForm: FormGroup;
  userregister:any;
  isLogInError :boolean=false;
  constructor(private fb: FormBuilder,private examenService:ExamenService,private toastr: ToastrService,private myRoutes:Router) { 
    this.createForm();
  
  this.user = new User();
  }
    createForm() {
      this.angForm = this.fb.group({
      
        username: ['', Validators.required ],
        password: ['', Validators.required ]
        
      });
    }
  public get username()
  {
    return this.angForm.get("username");
  }
  public get password()
  {
    return this.angForm.get("password");
  }


  login()
  {
    if(this.angForm.valid)
    {
    
      this.user.Username=this.username.value;
      this.user.Password=this.password.value;

      console.log(this.user.Username);
      console.log(this.user.Password);
      this.userregister = this.user;
  this.examenService.userAuthentication(this.user.Username, this.user.Password).subscribe((data:any)=>
  {
    localStorage.setItem('userToken',data.access_token);
    if(this.user.Username=="admin"){
      this.myRoutes.navigate(["adminhomepage/home"]);
    }else if(this.user.Username!="admin"){
      this.myRoutes.navigate(["userpage/login"]);
    }
    
    this.toastr.success('Logged In Successfully');
  },  
  (err:HttpErrorResponse)=>
  {
    this.isLogInError = true;
  })
      //this.examenService.register(this.userregister);
      
    }
    else{
  this.errormessage="Please Fill the Details"
    }
  }
  Back(){
    this.myRoutes.navigate(['welcomepage']);
  }

  ngOnInit() {
  }

}
