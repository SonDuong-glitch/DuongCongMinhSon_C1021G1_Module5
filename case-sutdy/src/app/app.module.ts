import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { ListAllCustomerComponent } from './customer/list-all-customer/list-all-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { AddNewCustomerComponent } from './customer/add-new-customer/add-new-customer.component';
import { AddNewServiceComponent } from './service-furama/add-new-service/add-new-service.component';
import { EditServiceComponent } from './service-furama/edit-service/edit-service.component';
import { ListServiceComponent } from './service-furama/list-service/list-service.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';
import { AddNewFacilityComponent } from './facility/add-new-facility/add-new-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
const routes: Routes = [
  {
    path: 'customerList',
    component: ListAllCustomerComponent
  },
  {
    path: 'editCustomer',
    component: EditCustomerComponent
  },
  {
    path: 'addNewCustomer',
    component: AddNewCustomerComponent
  }
  ,
  {
    path: 'addNewEmployee',
    component: AddNewEmployeeComponent
  },
  {
    path: 'ediEmployee',
    component: EditEmployeeComponent
  },
  {
    path: 'listEmployee',
    component: ListEmployeeComponent
  }
  ,
  {
    path: 'addNewFacility',
    component: AddNewFacilityComponent
  },
  {
    path: 'editFacility',
    component: EditFacilityComponent
  },
  {
    path: 'listFacility',
    component: ListFacilityComponent
  }
  ,
  {
    path: 'addNewService',
    component: AddNewServiceComponent
  },
  {
    path: 'editService',
    component: EditServiceComponent
  },
  {
    path: 'listService',
    component: ListServiceComponent
  },
  {
    path: '',
    component: BodyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListAllCustomerComponent,
    EditCustomerComponent,
    AddNewCustomerComponent,
    AddNewServiceComponent,
    EditServiceComponent,
    ListServiceComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    AddNewEmployeeComponent,
    AddNewFacilityComponent,
    EditFacilityComponent,
    ListFacilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
