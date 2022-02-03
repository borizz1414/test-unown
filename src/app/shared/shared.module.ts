import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [TableComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports:[TableComponent, HeaderComponent]
})
export class SharedModule { }
