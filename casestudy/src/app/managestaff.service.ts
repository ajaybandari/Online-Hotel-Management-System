import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Managestaff } from './managestaff';
import { NgModule } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ManagestaffService {

   baseUrl="http://localhost:9114/manageStaff"

  constructor(private http:HttpClient) { }

  
  public addEmployee(employeeData: any){
    return this.http.post(this.baseUrl+'/addEmployee',employeeData)
  }

  public getEMployee(){
    return this.http.get(this.baseUrl+ '/getEmployee')
  }

  



}
