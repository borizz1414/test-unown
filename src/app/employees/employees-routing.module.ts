import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesContainer } from './containers/list-employees/list-employees.container';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListEmployeesContainer,
      },
      {
        path: 'add-employees',
        component: AddEmployeesComponent,
      },

    ],
    
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
