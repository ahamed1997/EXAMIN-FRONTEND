import { Component, OnInit, Input, Output, Inject,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatRadioModule, MatRadioChange, MatRadioButton} from '@angular/material/radio';
import { Local } from 'protractor/built/driverProviders';
import { ExamenService } from 'src/app/services/examen.service';
import { Testpage } from 'src/app/models/testpage.model';



declare var check:any;
@Component({
  selector: 'app-questionrender',
  templateUrl: './questionrender.component.html',
  styleUrls: ['./questionrender.component.css']
})
export class QuestionrenderComponent implements OnInit {
@Input() questionrender :any;
@Input() test:Testpage;
@Output() selected = new EventEmitter<any>();
optionccicked : any;
testmodule:any;
useroption : any;
flag:any;
userflag:any;
Answer:any;
currentSno:any;
scores:any;
message:any;
testid:any;
public data:any=[];

  constructor(private examenService:ExamenService,private myActiveRoute:ActivatedRoute 
    ,private myRoutes:Router) {    
 
  }
  selectedObj;
  Onclick(Sno,Qno,Option,flvalue,obj)
  {

this.currentSno = Sno;

this.useroption = Option;

this.Answer = obj;
this.userflag = flvalue;
this.message = 1;
//this.saveInLocal(Sno,flvalue);
this.selected.emit(Qno)

if(this.currentSno!=""){


   this.questionrender = this.examenService.insertcurrentstatus(this.currentSno,this.useroption,this.userflag,this.Answer,this.testid).subscribe((data)=>
  {
    this.scores = data;
    console.log('SCORES :  ', data);
  })
}
  }
//   , @Inject(LOCAL_STORAGE) private storage:WebStorageService
// saveInLocal(key, val): void {
//   console.log('recieved= key:' + key + 'value:' + val);
//   this.storage.set(key, val);
//   this.data[key]= this.storage.get(key);
//  }

  FinishTest(){
    this.myRoutes.navigate(["resultspage"]);
  }

 
//   updateArray($event){

// console.log(this.selectedObj);
// $event = this.selectedObj;
//   }

  ngOnInit() {
  if(!this.questionrender)
  {  
    
    var testmodel,nxtsno,nxtqno,answer,flagno,crntsno,updflag,correctanswer;
    this.myActiveRoute.params.subscribe(p=>
      {
       
        testmodel = p["Testmodel"]
        nxtsno = p["Sno"]
        nxtqno = p["Qno"]
        
       
        this.testid= localStorage.getItem('testid');

       this.questionrender = this.examenService.getquestionsByQno(nxtsno,nxtqno,this.testid).subscribe((data)=>
      {        
          this.test= data;
          console.log(this.test);
          data.forEach(element=>{
            this.test = element;
            updflag= element.Flag
            if(updflag==""){
              this.flag=""
            }else{
              this.flag = element.Flag;
            }
            console.log(' last clicked option for current question  ', element.Flag)
          });

      })  
      
     
    });
    }
  }

}
