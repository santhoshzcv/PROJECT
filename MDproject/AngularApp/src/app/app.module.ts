import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';



export const routes:Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'table', component: TableComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:_id', component: EmployeeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
