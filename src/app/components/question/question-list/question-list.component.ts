import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExamenService } from 'src/app/services/examen.service';
import { Question } from 'src/app/models/question.model';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
ques:Question;
TestModel:any;
dat:any;
  constructor(private services : AdminService,private toastr : ToastrService) { }

  ngOnInit() {
    this.services.refreshList();
    this.sortList();
  }
  populateForm(ques : Question){
    console.log("list : ",this.services.list);
    this.services.formData = Object.assign({},ques);
    this.sortList();
  }
  QuestionForm(ques : Question){
    console.log("list : ",this.services.list);
    this.services.formData = Object.assign({},ques);
  }
  onDelete(SNo){
  var txt;
  var r=confirm("Are you sure want to delete this?")
  if(r==true){
    this.services.deleteQuestion(SNo);
    this.toastr.warning('Deleted Successfully','EXM.Delete')
    this.services.refreshList();
    this.sortList();
    // console.log("ok");
    // this.services.refreshList();
  }
  else{
    console.log("cancel");
  }
  this.services.refreshList();
  }
  
  // onDelete(ques:Question) {  
  //   if (confirm("Are you sure you want to delete this ?")) {   
  //   this.services.deleteQuestion(ques).subscribe((res) => {  
  //    // this.services.refreshList();
      
  //   });  
  sortList(){
    if(this.services.list){
      this.services.list.sort();
    }
    return this.services.list;
  }
  sendTestModel(event)
  {
    console.log("test ",this.TestModel);
    console.log("Event : ",event.target.value);
    this.services.getQuestiontype(this.TestModel).subscribe((dat)=>
      {
        console.log("dat : ",dat);
        this.dat = dat;
        
      })
      
    }

}
