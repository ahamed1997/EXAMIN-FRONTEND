import { Component, OnInit, Input } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var myStopFunction: any;


@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  @Input() resultspage :any;
scores:any;
testid:any;
testmodel:any;
username:any;
count:any;
  constructor(private examenService:ExamenService,private myActiveRoute:ActivatedRoute ,private myRoutes:Router) {

   }
   Back(){
    this.myRoutes.navigate(["userpage/login"]);
    
   }

  ngOnInit() {
  if(!this.resultspage)
  {
    this.username = localStorage.getItem('loggeduser');
   this.testid = localStorage.getItem('testid');
   this.testmodel = localStorage.getItem('testmodel');
    console.log('LOCAL STORAGE',localStorage.getItem('8'))
    
    // this.resultspage = this.examenService.getScores().subscribe((data)=>{
    //   console.log("The score is ", data);
    //   this.scores = data;
    // })
    
    this.resultspage = this.examenService.UpdateTestStatus(this.username,this.testid,this.testmodel).subscribe((data)=>{
      console.log(data);
    
      this.scores=data;
      myStopFunction();
    })
    localStorage.removeItem('testid');
    localStorage.removeItem('testmodel');
  }


}

}
