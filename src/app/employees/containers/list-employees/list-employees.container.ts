import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DATA } from 'src/app/data/employees';

@Component({
  selector: 'app-list-employees-container',
  templateUrl: './list-employees.container.html',
  styleUrls: ['./list-employees.container.scss']
})
export class ListEmployeesContainer implements OnInit {
  search: FormControl = new FormControl();
  displayedColumns: any = [
    { name: "date_of_birth", display: "Fecha de nacimiento" },
    { name: "name", display: "Nombre" },
    { name: "surname", display: "Apellido" },
    { name: "job", display: "Puesto de trabajo" },
    { name: "select", display: "Acciones" },
  ];
  dataSource:any;;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = DATA;
  }
  searchEmployees(){
    console.log('searchEmployees')
    console.log(this.search.value)

  let result = this.dataSource.find( (element:any) => element.name.toLowerCase() == this.search.value.toLowerCase()  );
  result != undefined ? this.dataSource = [result] : this.dataSource =  DATA;

  }
  deleteEmployee(user:any){
    console.log(user)
    let result = this.dataSource.filter( (element:any) => element.name.toLowerCase() != user.name.toLowerCase() );
    result != undefined ? this.dataSource = result : this.dataSource =  DATA;
  }
}
