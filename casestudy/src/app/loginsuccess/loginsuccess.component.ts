import { Component, OnInit } from '@angular/core';
import { Makereservations } from '../makereservations';
import { MakereservationsService } from '../makereservations.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
 reservation =new Makereservations();
  constructor(private makeReservationService:MakereservationsService,private auth:AuthserviceService) {
    // this.reserveRoom();
   }
   form = new FormGroup({
    code:new FormControl('',Validators.required)
   })

  ngOnInit(): void {
  }

  reserveRoom(regirsterForm: { value: any; }){
    this.makeReservationService.reserveRoom(regirsterForm.value).subscribe(
     (response) =>{
      console.log(response);
      this.reserveRoom(regirsterForm);
  },
  (error)=>{
    console.log(error);
  }
  );


  }

  getRoomDetails(regirsterForm: { value: any; }){
    this.makeReservationService.reserveRoom(regirsterForm.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }




  options = {
    "key": "rzp_test_skhzX1NKmsqFla", 
    "amount": "50000",
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", 
    "handler": function (response :any){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1: any;
pay(){
  this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
}


}

