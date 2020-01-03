export class PaymentUser{
 Username:string;
 name:string;
    email:string;
    mobile:string;
    aadharcardNumber:string;
    TestModel:string;
    Testdate:any;
Paymentmode:string;
Payeddate:string;
Cancelleddate:string;
    constructor(bname?,bemail?,bmobile?,baadharcardNumber?,btestModel?,bdate?,bpaymentmode?,Payeddate?,Cancelleddate?)
    {
        this.name=bname;
        this.email=bemail;
        this.mobile=bmobile;
        this.aadharcardNumber=baadharcardNumber;
        this.TestModel=btestModel;
        this.Testdate=bdate;
     this.Paymentmode=bpaymentmode;
this.Payeddate= Payeddate;
this.Cancelleddate = Cancelleddate;

    }
   
}
