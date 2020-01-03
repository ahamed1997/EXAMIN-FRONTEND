import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  opened=false;
  public chartType: string = 'pie';
  constructor(
    private toastr: ToastrService,private myActiveRoute:ActivatedRoute,private myRoutes:Router
  ) { 
    
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
