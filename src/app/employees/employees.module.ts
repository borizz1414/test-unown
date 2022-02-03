import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesContainer } from './containers/list-employees/list-employees.container';
import { SharedModule } from '../shared/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListEmployeesContainer, AddEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
