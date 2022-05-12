import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Managerlogin } from '../managerlogin';
import { ManagerloginService } from '../managerlogin.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  manager:Managerlogin=new Managerlogin();

  constructor(private managerService:ManagerloginService,private router:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ownerLogin(){
  //   console.log(this.owner)
  //   this.managerService.ownerLogin(this.owner).subscribe(data=>{
  //     alert("Login Succcessfully")
  //     this._router.navigate(['/internaldashboard'])
  //   },
  //   error=>alert("Login Successfully")
  //   );
  managerLogin(){
    console.log(this.manager)
    this.managerService.managerLogin(this.manager).subscribe(data=>
      {
        alert("login Successfully")
        this.router.navigate(['/internaldashboard'])
      },
      error=>
        alert("enter correct credentials")
      
      )
  }


}
