import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Firstpage } from 'src/app/models/firstpage.model';
import { ExamenService } from 'src/app/services/examen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Validate } from 'src/app/models/validate.model';
 declare var m14:any;
declare var slideshow:any;
declare var circleeffect:any;
declare var motion:any;
declare var loop:any;
@Component({
  selector: 'app-welcomepage,matBadge',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  errormessage:any;
  
date:any;
user:Validate;
result:any;
message:any;
users:User;
angForm: FormGroup;
 userregister: Validate;
 
  constructor(private examenService:ExamenService,private fb: FormBuilder,private myActiveRoute:ActivatedRoute,private myRoutes:Router,private toastr: ToastrService) { 
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
       }, 1000);
       this.message ;
       this.users = new User();
       this.user = new Validate();
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
  
  AdminLogIn(){
    this.examenService.adminvalidation(this.user).subscribe((data:string)=>{console.log(data)
      this.result = data;
      
      console.log(this.result)
      if(this.result)
      {      
        this.myRoutes.navigate(['adminhomepage']);
        
        //this.myRouter.navigateByUrl('/homepage');
        
      }else{
        console.log(this.result)
        this.message= "Invalid Username or Password";
        
      }})
  }
  Sigupclick(){
    this.myRoutes.navigate(['signup']);
  }
  Userclick(){
    this.myRoutes.navigate(['sigin']);
  }
  login(){
    if(this.angForm.valid)
  {
    
    this.user.Username=this.username.value;
    this.user.Password=this.password.value;
    console.log(this.user);
    this.userregister = this.user;
    this.toastr.success('Logged In  Successfully');
    
  }
  else{
this.errormessage="Please Fill the Details"
  }
  }

  ngOnInit() {
    motion();
    loop();
    slideshow();
    circleeffect();
  }

}
