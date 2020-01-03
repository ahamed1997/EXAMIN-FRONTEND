import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrService } from 'ngx-toastr';
function hello() {
  alert('Welcome!!!');
}
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})

export class UserpageComponent implements OnInit {

user:any;
  constructor(private examenService:ExamenService,private toastr: ToastrService,private myActiveRoute:ActivatedRoute,private myRoutes:Router) { 
    this.user=localStorage.getItem('loggeduser');
  }

  LogOut(){
    
    localStorage.removeItem('userToken');
    localStorage.removeItem('loggeduser');
    this.myRoutes.navigate(["welcomepage"]);
    this.toastr.warning('Logged Out Successfully');
  }
  ngOnInit() {
    
  }

}
