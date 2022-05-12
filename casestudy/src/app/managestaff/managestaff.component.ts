import { Component, OnInit } from '@angular/core';
import { Makereservations } from '../makereservations';
import { Managestaff } from '../managestaff';
import { ManagestaffService } from '../managestaff.service';

@Component({
  selector: 'app-managestaff',
  templateUrl: './managestaff.component.html',
  styleUrls: ['./managestaff.component.css']
})
export class ManagestaffComponent implements OnInit {


 reservation=new Managestaff()
  constructor(private manageStaffService:ManagestaffService) { }

  ngOnInit(): void {
  }

  manageStaff (regirsterForm: { value: any; }){
    this.manageStaffService.addEmployee(regirsterForm.value).subscribe(
     (response) =>{
      console.log(response);
      this.manageStaff(regirsterForm);
  },
  (error)=>{
    console.log(error);
  }
  );
}}