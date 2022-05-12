import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageroomService {

  baseUrl="http://localhost:9104/manageroom"

  constructor(private http:HttpClient) { }



  bookRoom(roomData:any){
    return this.http.post(this.baseUrl+'/addRoom',roomData)

  }


}
// public reserveRoom(roomData:any){
//   return this.http.post(this.baseUrl +'/add',roomData)
// }
