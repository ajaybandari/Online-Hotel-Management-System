import { Component, OnInit } from '@angular/core';
import { Manageroom } from '../manageroom';
import { ManageroomService } from '../manageroom.service';

@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.css']
})
export class ManageroomComponent implements OnInit {

  room =new Manageroom();

  constructor(private manageRoomService:ManageroomService) { }

  ngOnInit(): void {
  }
  // manageStaff (regirsterForm: { value: any; }){
  //   this.manageStaffService.addEmployee(regirsterForm.value).subscribe(
  //    (response) =>{
  //     console.log(response);
  //     this.manageStaff(regirsterForm);
  // },
  // (error)=>{
  //   console.log(error);
  // }
  // );

  manageroom(registerForm:{value:any}){
    this.manageRoomService.bookRoom(registerForm.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }


}

