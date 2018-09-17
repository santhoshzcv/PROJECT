import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { Router,ActivatedRoute,Params } from '@angular/router';

declare var M:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {
  c:number=1;
  constructor(private employeeService:EmployeeService, private route: ActivatedRoute,
    private router: Router) { }
  id:string;
  ngOnInit() {
  
    
    {
      this.route.params.subscribe(params=>{
        //this.employeeService.selectedEmployee._id=params._id;
        
        this.id=params._id;
    
        this.employeeService.getEmployeeListId(this.id).subscribe((res)=>{
          this.employeeService.selectedEmployee=res as Employee;
          console.log(this.employeeService.selectedEmployee);
         console.log(res);
        })
      })
      
    } 
  // (+) converts string 'id' to a number
  this.resetForm();
    
    this.refreshEmployeeList();
  }

 next(){
   this.router.navigate(['table']);
 }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.employeeService.selectedEmployee={
      _id:"",
      name:"",
      position:"",
      office:"",
      salary:null
    }
  }
  onSubmit(form:NgForm){
    console.log("santhosh");
    this.employeeService.postEmployee(form.value).subscribe((res)=>{
      console.log(res);
      this.resetForm(form);
      M.toast({html:'saved sucessfully',classes:'rounded'});
    });
  }
  onUpdate(form:NgForm){
    
    this.employeeService.putEmployee(form.value).subscribe((res)=>{
      console.log(res);
      this.resetForm(form);
      M.toast({html:'updated sucessfully',classes:'rounded'});
    });
  }
  
  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.employeeService.employees=res as Employee[];
      
    })
  }

}
