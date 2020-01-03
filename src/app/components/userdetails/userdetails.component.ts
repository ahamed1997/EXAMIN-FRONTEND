import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  admin:Admin[];
  constructor(private service:AdminService, private myRoutes:Router) {
    this.admin=this.service.getUserData();
      console.log(this.admin);
   }

  ngOnInit() {
  }

}
