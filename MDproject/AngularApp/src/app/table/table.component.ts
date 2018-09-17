import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { Router } from '@angular/router';

declare var M:any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  sortedCollection: any[];
  order: string = 'Employee.name';
  constructor(private employeeService:EmployeeService,private router:Router) { }
  ngOnInit() {
   this.refreshEmployeeList();
  }
  userFilter: any =  { office: ''};
  userFilter1: any = { name: '' };
 
  p: number = 1;  
  back()
  {
    this.router.navigate(['employee']);
  }

  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.employeeService.employees=res as Employee[];
      
    })
  }
  onEdit(_id:string){
   
    this.router.navigate([`/employee/${_id}`]);
     
      
  }
  onDelete(_id:string){
    if(confirm("Are you sure to delete this record?")==true){
      return this.employeeService.deleteEmployee(_id).subscribe((res)=>{
        this.refreshEmployeeList();
        M.toast({html:'deleted sucessfully',classes:'rounded'});
      })
    }
  }
 /* <!-- my.component.ts -->
  import {Component} from '@angular/core';
   
  @Component({
      selector: 'my-component',
      template: `
      <ul>
        <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
      </ul>
                 
      <pagination-controls (pageChange)="p = $event"></pagination-controls>
      `
  })
  export class MyComponent {
      p: number = 1;
      collection: any[] = someArrayOfThings;  
  <!-- } --> */
  /*import { Component } from '@angular/core';
 
@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="userFilter.name" placeholder="name">
        <ul>
          <li *ngFor="let user of users | filterBy: userFilter">{{ user.name }}</li>
          
          <!-- in case you want to show empty message -->
          <li *ngIf="(users | filterBy: userFilter).length === 0">No matching elements</li>
        </ul>
    </div>  
  `
})
 
export class AppComponent {
  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  userFilter: any = { name: '' };
}*/

/*const languages = ['English', 'German', 'Russian', 'Italian', 'Ukrainian'];
// your $or filter
const filter = { $or: ['German', 'English'] };
*/
/*th [class.active]="order === 'info.name'"
            (click)="setOrder('info.name')"
            class="mdl-data-table__cell--non-numeric"
        >
          Name <span [hidden]="reverse">▼</span
          ><span [hidden]="!reverse">▲</span>
        </th>
        <th [class.active]="order === 'info.number'"
            (click)="setOrder('info.number')"*/
      /* sortedCollection: any[];
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.collection, 'info.name');
    console.log(this.sortedCollection);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  } */
}
