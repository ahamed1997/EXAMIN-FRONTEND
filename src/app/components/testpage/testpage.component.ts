import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Homepage } from 'src/app/models/homepage.model';
import { Testpage } from 'src/app/models/testpage.model';
import { ExamenService } from 'src/app/services/examen.service';


declare var stopwatch: any;
declare var check: any;


type NewType = Testpage;

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
@Input() testpage:any;
@Input() selected:any;
  test:Homepage[];
  testmodel:any;
  qno : any;
  count:number=0;  
  questions :NewType;
  testtype:Testpage;
  testmodule : Testpage;
  useranswer:Homepage;
  bbbl:Testpage;
  receivedChildMessage: string;
  constructor(private examenService:ExamenService,private myActiveRoute: ActivatedRoute,private myRoutes:Router) {



   }
   OnClick(Testmodel,Sno,Qno,qs){
 
   this.bbbl = Qno;
    this.myRoutes.navigate(["testpage/"+ Testmodel +"/questionrender",Testmodel,Sno,Qno],{skipLocationChange:true});
  
   }
   changemomentfromchil(selectedfromchild:any){
if(selectedfromchild){
  this.qno = selectedfromchild
  console.log('Emitted value ', this.qno)
}
   }
  
ngOnInit() 
{
  
  
  if(!this.testpage)
  {
    
    var testmodel;
    this.myActiveRoute.params.subscribe(p=>
      {
       
        testmodel = p["Testmodel"]
        this.testtype = p["Testmodel"]
        this.testpage = this.examenService.getquestions(testmodel).subscribe((data)=>
      {
          this.test= data;
          console.log(data);
          check();
          data.forEach(element => {
            this.count = this.count+1;
            console.log('count',this.count);
            
          });
          this.count = 1;
          stopwatch(this.count);
          console.log(this.count)
      })      
    });
   
      
   
  }
  console.log('count',this.count);

  
}

  
  
}
