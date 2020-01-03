import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  errormessage:any;
  user:User;
  mail :any;
  myForm: FormGroup;

  userregister:any;
  isLogInError :boolean=false;
  constructor(private fb: FormBuilder,private examenService:ExamenService,private toastr: ToastrService,private myRoutes:Router) { 
    //this.createForm();
    this.myForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required]),
       


      });
  
  this.user = new User();
  }
  
  Back(){
    this.myRoutes.navigate(['welcomepage']);
  }
  public get email()
  {
    return this.myForm.get("email");
  }
  forgotpassword(){
    if(this.myForm.valid)
    {
      this.mail = this.email.value;
      console.log(this.mail)
      this.examenService.forgotpassword(this.mail).subscribe((data)=>{
        console.log(data);
        this.myRoutes.navigate(['welcomepage']);
        this.toastr.success('Your Password has been sent to your E-Mail');
      })
    }else{
      this.errormessage ="Enter a Valid Mail ID"
    }
  }
  ngOnInit() {
  }

}
