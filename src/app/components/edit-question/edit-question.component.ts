import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  TestModel:any;
  dat:any;
  constructor(private examenService:AdminService) { }

  sendTestModel(event)
    {
      console.log("test ",this.TestModel);
      console.log("Event : ",event.target.value);
      this.examenService.getQuestiontype(this.TestModel).subscribe((dat)=>
        {
          console.log("dat : ",dat);
          this.dat = dat;
        })
      }
  ngOnInit() {
    
  }

}
