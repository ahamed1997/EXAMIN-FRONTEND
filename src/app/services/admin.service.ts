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

export class AdminService{
    users:any;
    testmodule : Testpage;
    result:string;
    home:Homepage;
    formData:Question;
    list: Question[];
    admin:any;

    constructor(private myHttp:HttpClient){
        this.users=[];
        this.admin=[];
    }
    getUserdetails(){
        return this.myHttp.get('https://localhost:44389/api/register');   
    }   
    getUserData(){
        this.getUserdetails().subscribe((response)=>
        {
            this.admin=response;
            console.log(this.admin);
        });
        return this.admin;
    
    } 
    getAdmindetails(){
        return this.myHttp.get('https://localhost:44389/api/examin');
    }
    getAdminData(){
        this.getAdmindetails().subscribe((response)=>
        {
            this.admin=response;
            console.log(this.admin);
        });
        return this.admin;
    
    } 
    getScoredetails(){
        return this.myHttp.get('https://localhost:44389/api/Paiduser');
    }
    getScoreData(){
        this.getScoredetails().subscribe((response)=>
        {
            this.admin=response;
            console.log(this.admin);
        });
        return this.admin;
    
    } 
    getPaidUsers(){
        return this.myHttp.get('https://localhost:44389/api/Paiduser');
    }
    getPaidUsersData(){
        this.getPaidUsers().subscribe((response)=>
        {
            this.admin=response;
            console.log(this.admin);
        });
        return this.admin;
    
    } 
    getQuestiontype(testmodel:string){
        testmodel = testmodel.toLowerCase();
        console.log(testmodel);
        return this.myHttp.get('https://localhost:44389/api/AdminValues?testtype='+testmodel);
    }
    postQuestion(formData : Question){
       return this.myHttp.post('https://localhost:44389/api/AdminValues',formData);
    }
    putQuestion(formData : Question){
        return this.myHttp.put('https://localhost:44389/api/AdminValues/'+formData.Sno,formData);
     }
     deleteQuestion(SNo:number){
        console.log(SNo)
        
        this.myHttp.delete("https://localhost:44389/api/AdminValues?Sno="+SNo).subscribe((res)=>{
            console.log(res);
        })
    
    } 
    refreshList(){
        return this.myHttp.get('https://localhost:44389/api/AdminValues').toPromise().then(res=>this.list=res as Question[]);
    }






}