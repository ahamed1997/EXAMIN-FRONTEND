import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Firstpage } from 'src/app/models/firstpage.model';
import { ExamenService } from 'src/app/services/examen.service';
import { PaymentUser } from 'src/app/models/paymentuser.model';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  pay: any;
  payment: Firstpage;
  userdata: any;
  submitted = false;
  valid: string;
  cancel: string;
  updatestatus:any;
  teststatus:any;
  @Input() datas:PaymentUser[];
  today = new Date().toLocaleDateString()
  constructor(private examenService:ExamenService,private myRouter:Router) {}

  
  

  
   

  ngOnInit() {
    this.pay =localStorage.getItem('loggeduser');
    this.examenService.CheckStatus(this.pay).subscribe(res => {
      this.datas = res;
      console.log('check status', res);
      if(this.datas.length>0)
      {
        this.userdata=this.datas;;
      }
      else 
      {
        this.teststatus="empty";
      }
    })
    
  }

}
