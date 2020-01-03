import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Question } from 'src/app/models/question.model';
import { ExamenService } from 'src/app/services/examen.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quest:Question;
  ids:any = [];
  constructor(private services:AdminService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: NgForm){
  if(form != null)
  form.resetForm();
  this.services.formData = {
    Sno:null,
    Testmodel:'',
    Question:'',
    Answer:'',
    Option1:'',
    Option2:'',
    Option3:'',
    Option4:'',
    Mark:null
  }
}

getAllIds(){
  let arr:any = this.services.list;
  if(this.ids.length === 0){
    arr.forEach(obj => {
      this.ids.push(obj.Sno);
    });
  }
  console.log("ids : ",this.services.list);
}

onSubmit(form :NgForm){
  this.getAllIds();
  if(this.ids.indexOf(this.services.formData.Sno) === -1)
  this.insertRecord(form);
  else
  this.updateRecord(form); 
}
insertRecord(form :NgForm){
this.services.postQuestion(form.value).subscribe(res=>{
  this.toastr.success('Added Successfully','Examen.AddQues')
  this.resetForm(form);
  this.services.refreshList();
});
}
updateRecord(form :NgForm){
  this.services.putQuestion(form.value).subscribe(res=>{
    this.toastr.info('Updated Successfully','Examen.UpdateQues')
    this.resetForm(form);
    this.services.refreshList();
  });
}
}
