import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakereservationsService {
  
  baseUrl="http://localhost:9100/make_reservations"




  constructor(private http:HttpClient) { }
  // public addEmployee(employeeData: any){
  //   return this.http.post(this.baseUrl+'/addEmployee',employeeData)
  // }

  // public getEMployee(){
  //   return this.http.get(this.baseUrl+ '/getEmployee')
  // }


  public reserveRoom(roomData:any){
    return this.http.post(this.baseUrl +'/add',roomData)
  }

  public getRoom(roomData:any){
    this.http.get(this.baseUrl+'/view_reservation',roomData)
  }
}
