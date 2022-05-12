import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventorymanagementService } from '../inventorymanagement.service';
import { ManageInventory } from '../manage-inventory';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {
  
  inventory =new ManageInventory();

  // inventoryDetails!: ManageInventory[];

  constructor(private inventoryService:InventorymanagementService) { 
    this.getInventoryDetails();
  }

  ngOnInit(): void {
    
  }


  inventoryManage(registerForm:NgForm){
    this.inventoryService.addInventory(registerForm.value).subscribe(
      (response)=>{
        
        console.log(response);
        this.getInventoryDetails();
      },
      (error)=>
      {
        console.log(error);
      }

    )
  }
  getInventoryDetails(){
    this.inventoryService.getInventory().subscribe(
      (resp)=>{
        console.log(resp);
        // this.inventoryDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
