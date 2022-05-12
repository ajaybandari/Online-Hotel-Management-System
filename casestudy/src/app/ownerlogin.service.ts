import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from './owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerloginService {

  private baseURL="http://localhost:9107/owner/login"
  constructor(private http:HttpClient) { }
  ownerLogin(owner:Owner):Observable<object>{
    console.log(owner);
    return this.http.post(`${this.baseURL}`,owner);

  }
}
