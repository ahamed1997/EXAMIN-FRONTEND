export class Validate{
    Id:string;
    Testid:string;
    Username:string;
    Testmodel:string;
    Teststatus:string;
    Testdate:string;
    Result:string;
    Password:string;
    Paymentmode:string;
    constructor(id?,Testid?,username?,testmodel?,teststatus?,testdate?,result?,passwird?,pas?){
        this.Id=id;
        this.Testid=Testid;
        this.Username=username;
        this.Testmodel=testmodel;
        this.Teststatus=teststatus;
        this.Testdate=testdate;
        this.Result=result;
        this.Password = passwird;
        this.Paymentmode = pas;
    }
}