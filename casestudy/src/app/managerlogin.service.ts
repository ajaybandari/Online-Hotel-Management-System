import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Managerlogin } from './managerlogin';

@Injectable({
  providedIn: 'root'
})
export class ManagerloginService {

  private baseURL="http://localhost:9202/manager/login"
  constructor(private http:HttpClient) { }
  managerLogin(manager:Managerlogin):Observable<object>{
    console.log(manager);
    return this.http.post(`${this.baseURL}`,manager);

  }
}
