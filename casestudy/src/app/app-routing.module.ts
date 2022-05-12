import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashbordComponent } from './dashbord/dashbord.component';

import { HomeComponent } from './home/home.component';
import { InternaldashboardComponent } from './internaldashboard/internaldashboard.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoutComponent } from './logout/logout.component';

import { ManagerComponent } from './manager/manager.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManagestaffComponent } from './managestaff/managestaff.component';


import { OwnerComponent } from './owner/owner.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RegistrationComponent } from './registration/registration.component';




const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Owner',component:OwnerComponent},
  {path:'Manager',component:ManagerComponent},
  {path:'Receptionist',component:ReceptionistComponent},
  {path:'login',component:LoginComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'Pricing',component:PricingComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent},

  {path:'dashbord',component:DashbordComponent},
  {path:'payment',component:PaymentComponent},
  {path:'managestaff',component:ManagestaffComponent},
  {path:'internaldashboard',component:InternaldashboardComponent},
  {path:'manageroom',component:ManageroomComponent},
  {path:'manageinventory',component:InventoryManagementComponent},
  {path:'logout',component:LogoutComponent}
  
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
