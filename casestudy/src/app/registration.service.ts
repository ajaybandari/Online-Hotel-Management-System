import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user: any):Observable<any>{
   return  this._http.post<any>("http://localhost:9016/login",user)
  }


  public registerUserFromRemote(user: any):Observable<any>{
    return this._http.post<any>("http://localhost:9016/registeruser",user)
  }
}
