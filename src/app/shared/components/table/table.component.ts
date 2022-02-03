
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DATA } from 'src/app/data/employees';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns = [];

  @Input() columns:any;
  @Input() data:any;
  @Output() delete = new EventEmitter();
  ngOnInit(){
    console.log(this.columns)
    console.log(this.data)
    this.setTable()
  }
  // Funcion para setear las config de la table
  setTable(){
    this.displayedColumns = this.columns.map((col:any) => col.name);
  }
  deleteEmployee(user:any){
    this.delete.emit(user)

  }
}