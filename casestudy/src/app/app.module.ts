import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OwnerComponent } from './owner/owner.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ManagerComponent } from './manager/manager.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { PaymentComponent } from './payment/payment.component';
import { ManagestaffComponent } from './managestaff/managestaff.component';
import { InternaldashboardComponent } from './internaldashboard/internaldashboard.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { LogoutComponent } from './logout/logout.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OwnerComponent,
    ReceptionistComponent,
    ManagerComponent,
    AboutUsComponent,
    PricingComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    
    DashbordComponent,
    PaymentComponent,
    ManagestaffComponent,
    InternaldashboardComponent,
    ManageroomComponent,
    InventoryManagementComponent,
    LogoutComponent,
   
    
    
    
    


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
