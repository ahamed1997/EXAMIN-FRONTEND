import { Component, OnInit, Input } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Firstpage } from 'src/app/models/firstpage.model';
import { ToastrService } from 'ngx-toastr';
import { Paymentmode } from 'src/app/models/paymentmode.model';
import { PaymentUser } from 'src/app/models/paymentuser.model';

@Component({
  selector: 'app-payment-registration',
  templateUrl: './payment-registration.component.html',
  styleUrls: ['./payment-registration.component.css']

})
export class PaymentRegistrationComponent implements OnInit {
 
  pay:any;
  users:any;
  today:string="Upcoming";
  myDate = new Date();
  @Input() userdata:any;
 @Input() datas:PaymentUser[];


  teststatus:any;
  payment: Firstpage;

  submitted = false;
  valid: string;
  cancel: string;
  updatestatus:any;
  constructor(private examenService:ExamenService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute) 
  {
    
   }
   onclick(model,date,id) {

    let today = new Date().toDateString()
        console.log(today)   
    console.log('paramtere',model)
    console.log('paramtere',date)
    console.log('paramtere',id)
    this.examenService.Compare(date).subscribe((data:any)=>{
      console.log('compare',data);
      if(data){
        this.myRoutes.navigate(["userpage/homepage",model,id],{skipLocationChange:true});

      }else{
        this.toastr.warning('Sorry! You are not Allow to attend the Test');

      }
    })
    
  }
  TestCancel(Testid) {
    var r = confirm("Are sure wants to Cancel the Test?");
    if (r == true) {
      console.log("ok");
      // $('#TestCancel').attr("disabled", true);
      // $('#TakeTest').attr("disabled", true);
      this.cancel = "Canceled!!"
      console.log('t id',Testid);
      this.examenService.updatestatus(Testid)
      this.myRoutes.navigate(["userpage/login"]);
    }
  }
  ngOnInit() {
this.pay = localStorage.getItem('loggeduser');

console.log(this.pay);

    this.users = this.examenService.UPcominTestRequest(this.pay,this.today).subscribe((res):any => {
      this.datas = res;

     
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
