import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment = new Payment();

  constructor(private managePaymentService:PaymentService) { }

  ngOnInit(): void {
  }

  doPayment(regirsterForm:any){
    this.managePaymentService.makePayment(regirsterForm.value).subscribe(
      (response) =>{
        console.log(response);
      },
      (err) =>{
        console.log(err);

      }

      )

  }

}
