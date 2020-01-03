import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancelresult',
  templateUrl: './cancelresult.component.html',
  styleUrls: ['./cancelresult.component.css']
})
export class CancelresultComponent implements OnInit {
  userdata: any;
  pay:any;
  users:any;
  today:any;
  myDate = new Date();
  constructor(private examenService:ExamenService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute) 
  {  
   }
   ngOnInit() {
    this.pay = localStorage.getItem('loggeduser');
    this.today = new Date().toLocaleDateString();
    console.log(this.pay);
    this.today=new Date().toLocaleDateString();
        this.users = this.examenService.CheckStatus(this.pay).subscribe(res => {
          this.userdata = res;
          
        })
      }

}
