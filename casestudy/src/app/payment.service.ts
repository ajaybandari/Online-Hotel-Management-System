import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl="http://localhost:9111/payment"; 


  constructor(private http:HttpClient) { }

  public makePayment(pay:any){
    return this.http.post(this.baseUrl+'/addpayment', pay)
  }

 
}
