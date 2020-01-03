import { Firstpage } from "../models/firstpage.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Homepage } from '../models/homepage.model';
import { Observable, empty } from 'rxjs';
import { Question } from '../models/question.model';
import {Admin} from '../models/admin.model';
import { Testpage } from '../models/testpage.model';


@Injectable({
    providedIn:'root'
})

export class ExamenService{
    users:any;
    testmodule : Testpage;
    result:string;
    home:Homepage;
    formData:Question;
    list: Question[];
    admin:any;
    readonly rootURL="https://localhost:44389/api"
    constructor(private myHttp:HttpClient){
        this.users=[];
        this.admin=[];
    }


    // getAllUsers()
    // {
    //    return this.myHttp.get("https://localhost:44389/api/Values");
    //  }
    //  getUserData():Firstpage[]
    // {
    //     this.getAllUsers().subscribe((data)=>
    //    {
    //       this.users = data;
            
    //    })
    //     console.log(this.users);
    //     return this.users;
    //  }
    validation(firstpage:Firstpage)
    {
        console.log('My data sent to webapi ',firstpage)
          return this.myHttp.post("https://localhost:44389/api/Values/",firstpage)
        
                
     }
     adminvalidation(firstpage:Firstpage)
    {
        console.log('My data sent to webapi ',firstpage)
          return this.myHttp.post("https://localhost:44389/api/examin/",firstpage)
        
                
     }
     getquestions(homepage:string):Observable<any>
     {
         return this.myHttp.get("https://localhost:44389/api/Values?testmodel="+homepage)
        
     }
     insertcurrentstatus(CurrentSno:any,Useranswer:string,userflag:number,crctanswer:any,testid:any):Observable<any>
     {
    
        console.log('CurrentSno',CurrentSno)
         console.log('answer',Useranswer)
         console.log('flag',userflag)
         var s="jhdghe";
    
       return this.myHttp.get("https://localhost:44389/api/Paiduser?Currentsno="+CurrentSno+"&Useranswer="+Useranswer+"&Userflag="+userflag+"&Answer="+crctanswer+"&testid="+testid)
         
     }

     getquestionsByQno(Sno:any,Qno:number,testid:any):Observable<any>
     {    
         console.log('Sno', Sno)
         console.log('QNo',Qno)       
         return this.myHttp.get("https://localhost:44389/api/Values?Sno="+Sno+"&Qno="+Qno+"&Testid="+testid);
     }
     getScores(){
         return this.myHttp.get("https://localhost:44389/api/Values");
     }

     /**AUTHENTICATION */

     register(register:any):Observable<any>
     {
        var reqHeader = new HttpHeaders({'No-Auth':'True'});
         console.log('Service',register)
        return this.myHttp.post("https://localhost:44389/api/check/Registration",register,{headers:reqHeader})
     }

     userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
        return this.myHttp.post('https://localhost:44389/token', data, { headers: reqHeader });
      }
      getUserClaims(){
        return  this.myHttp.get('https://localhost:44389/api/getuserdetails');
       }



       Compare(dates : any):Observable<any>
       {
        return this.myHttp.get("https://localhost:44389/api/Compare?Compa="+dates);
       }
     /**ADMIN CONTROLLES */
     
/**PAYMENT PAGE */
addExamRegister(paymenttype:any,exampaymentRegisters:any):Observable<any>
{
  
   console.log('in service',paymenttype,exampaymentRegisters);
   //return this.myHttp.post("https://localhost:44330/api/ExamRegister"+"?"+"paymenttype="+paymenttype,exampaymentRegisters);
   
  return this.myHttp.put("https://localhost:44389/api/Examin?paymenttype="+paymenttype,exampaymentRegisters)
 
}
CheckStatus(pay: any):Observable<any>
 {
    return this.myHttp.get("https://localhost:44389/api/Examin?Username=" + pay);
}
 UPcominTestRequest(username:any,teststatus:any):Observable<any>{
    
    return this.myHttp.get("https://localhost:44389/api/Compare?Username="+username+"&Teststatus="+teststatus);
 }
updatestatus(Testid:string){
    console.log(Testid);
   return this.myHttp.put("https://localhost:44389/api/Examin?testid="+Testid,"").subscribe((data)=>{
        console.log(data);
    });
}
UpdateTestStatus(username,testid,testmodel):Observable<any>
{
    
    return this.myHttp.get("https://localhost:44389/api/Examin?Username="+username+"&Testid="+testid+"&Testmodel="+testmodel);
    //         return this.myHttp.get("https://localhost:44389/api/Values?Sno="+CurrentSno+"+&Useranswer="+Useranswer+"&Flag="+userflag+"&Answer="+crctanswer)

}
forgotpassword(email:any):Observable<any>
{
    console.log(email)
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.myHttp.get("https://localhost:44389/api/Authentication/Check?Email="+email,{ headers: reqHeader });
}
    
}


























































