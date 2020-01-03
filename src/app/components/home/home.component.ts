import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  adminClick(){
    this.router.navigate(['adminhomepage/admin']);
   }
  userClick(){
    this.router.navigate(['adminhomepage/users']);
   }
   paymentClick(){
    this.router.navigate(['adminhomepage/payment']);
   }
   scoreClick(){
    this.router.navigate(['adminhomepage/score']);
   }
  ngOnInit() {
  }





  

}
