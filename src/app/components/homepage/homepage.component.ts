import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';
import { Homepage } from 'src/app/models/homepage.model';
import { ExamenService } from 'src/app/services/examen.service';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  questions : Homepage[];
  home:Homepage;
  model:any;
  id:any;
minutes:any;

  
  constructor(private examenService:ExamenService,private myRoutes:Router,private myActiveRoute: ActivatedRoute) { 
this.home = new Homepage();
this.myActiveRoute.params.subscribe(p=>
  {
   
    this.model = p["model"]
    this.id = p["id"]
    console.log(this.model)
    console.log(this.id)
  });
  }
  backclick(){
    this.myRoutes.navigate(['userpage/paymentregistration']);
  }
  starttest(){
    localStorage.setItem('testid',this.id);
    localStorage.setItem('testmodel',this.model);
    this.myRoutes.navigate(['testpage',this.model]);
  }
 

 
  
  ngOnInit() {
    
    

    
  }

}
