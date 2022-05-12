import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageInventory } from './manage-inventory';


@Injectable({
  providedIn: 'root'
})
export class InventorymanagementService {

  
  constructor(private http:HttpClient) { }

  baseURL="http://localhost:9210/inventory";


  // private url="http://localhost:9210/inventory/view";
  // public reserveRoom(roomData:any){
  //   return this.http.post(this.baseUrl +'/add',roomData)
  // }

  public addInventory(inventoryData:any){
    return this.http.post(this.baseURL+ '/add',inventoryData)
  }

  public getInventory(){
    return this.http.get(this.baseURL+'/view');
  }

}
