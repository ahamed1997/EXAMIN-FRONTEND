import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {
  admin:Admin[];
  // admin:Admin[];
  // constructor, private myRoutes:Router) { 
  //   this.admin=this.adminservice.getAdminData();
  //   console.log(this.admin);
      
  // }
  constructor(private adminservice:AdminService){
    this.admin=this.adminservice.getAdminData();
       console.log(this.admin);
  }


  ngOnInit() {
    
  }

}
