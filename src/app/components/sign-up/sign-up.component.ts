import { Component, OnInit } from '@angular/core';

import { NgForm,FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errormessage:any;
  userregister:any;
  primaykeyerror:any;
  user:User;
  signupform: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private examenService:ExamenService,
    private toastr: ToastrService,private myRoutes:Router) { 
      // this.createForm();
  
  this.user = new User();
  this.createUser();
  }
  // createForm() {
//     this.angForm = this.fb.group({
//        name: ['', Validators.required ],
//        email: ['', Validators.required ],
//        phone: ['', Validators.required ],
//        username: ['', Validators.required ],
//        password: ['', Validators.required ]
      
//     });
//   }
//   public get name()
//   {
//     return this.angForm.get("name");
//   }
//   public get email()
//   {
//     return this.angForm.get("email");
//   }
//   public get phone()
//   {
//     return this.angForm.get("phone");
//   }
//   public get username()
//   {
//     return this.angForm.get("username");
//   }
//   public get password()
//   {
//     return this.angForm.get("password");
//   }
//   register()
// {
//   if(this.angForm.valid)
//   {
//     this.user.Name=this.name.value;
//     this.user.Email=this.email.value;
//     this.user.Phone=this. phone.value;
//     this.user.Username=this.username.value;
//     this.user.Password=this.password.value;
//     console.log(this.user);
//     this.userregister = this.user;
    
//     this.examenService.register(this.userregister).subscribe((data):any=>
//       {
//           console.log(data);
//           if(data){
//             this.myRoutes.navigate(['sigin']);
//             this.toastr.success('Registration Done Successfully..!');
   
//           }
//           else{
//             this.primaykeyerror="Username or E-Mail already Exist";

//           }
//       })
//   }
//   else{
// this.errormessage="Please Fill the Details"
//   }
// }
createUser(){
  this.signupform = new FormGroup(
    {
      Name: new FormControl(),
      Email: new FormControl(),
      Phone: new FormControl(),
      Username: new FormControl(),
      Password: new FormControl(),
    }
  );
}
register()
{
  this.submitted=true;
  if(this.signupform.invalid){
    console.log('Invalid form')
    return;
  }
  if(this.signupform.valid)
  {
    this.user.Name=this.signupform.value.name;
    this.user.Email=this.signupform.value.email;
    this.user.Phone=this.signupform.value.phone;
    this.user.Username=this.signupform.value.username;
    this.user.Password=this.signupform.value.password;
    console.log(this.user);
    this.userregister = this.user;
    
    this.examenService.register(this.userregister).subscribe((data):any=>
      {
          console.log(data);
          if(data){
            this.myRoutes.navigate(['sigin']);
            this.toastr.success('Registration Done Successfully..!');
   
          }
          else{
            this.primaykeyerror="Username or E-Mail already Exist";

          }
      })
  }
  else{
this.errormessage="Please Fill the Details"
  }
}
get f() { return this.signupform.controls}

Back(){
  this.myRoutes.navigate(['welcomepage']);
}
  ngOnInit() {
 this.resetForm();
  
 this.signupform = this.fb.group({
  name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],

  email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  phone: ['', [Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]],
  username:  ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
  password:  ['', [Validators.required]],


});
  }
  
    resetForm(form? : NgForm){
if(form!=null){
  form.reset();
  this.user = {
    Username:"",
    Password:"",
    Name:"",
    Phone:"",
    Email:""
  }
}
    }
}
