import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-scoredetails',
  templateUrl: './scoredetails.component.html',
  styleUrls: ['./scoredetails.component.css']
})
export class ScoredetailsComponent implements OnInit {
  admin:Admin[];
  dat:any;
  constructor(private examenService:AdminService, private myRoutes:Router) {
    
   }

  ngOnInit() {
    this.admin = this.examenService.getScoreData();
  }

}
