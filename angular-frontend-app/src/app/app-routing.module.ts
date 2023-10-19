import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'create',component:CreateEmployeeComponent},
  {path:'',component:HomeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'employee-details/:id', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
