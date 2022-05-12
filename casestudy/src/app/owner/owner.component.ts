import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from '../owner';
import { OwnerloginService } from '../ownerlogin.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owner:Owner=new Owner();

  constructor(private ownerService:OwnerloginService ,private _router:Router) { }
  ngOnInit(): void {
    
  }
  ownerLogin(){
    console.log(this.owner)
    this.ownerService.ownerLogin(this.owner).subscribe(data=>{
      alert("Login Succcessfully")
      this._router.navigate(['/internaldashboard'])
    },
    error=>alert("Login Successfully")
    );
  }



}