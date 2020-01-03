export class Admin{
    Name:string;
    Email:string;
    Phone:string;
    Username:string;
    Testmodel:string;
    Date:string;
    Admin_name:string;
    Admin_email:string;
    Admin_phone:string;
    Admin_username:string;
    Admin_Image:string;
    Score:any;
    constructor(aname?,aemail?,aphone?,auser?,atestmodel?,adate?,aaname?,aaemail?,aaphone?,aauser?,ascore?,aimage?){
        this.Name=aname;
        this.Email=aemail;
        this.Phone=aphone;
        this.Username=auser;
        this.Testmodel=atestmodel;
        this.Date=adate;
        this.Admin_name=aaname;
        this.Admin_email=aaemail;
        this.Admin_phone=aaphone;
        this.Admin_username=aauser;
        this.Score=ascore;
        this.Admin_Image =aimage;
    }

}