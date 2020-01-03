import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Firstpage } from 'src/app/models/firstpage.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
admin:any;
  constructor(private examenService:AdminService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute)
   { }

  ngOnInit() {
this.examenService.getPaidUsers().subscribe((data)=>{
this.admin=data;
})
  }

}
