import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];

  public employee: Employee = new Employee();

  public errormessage: string = null;

  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    this.loadEmployess();
  }

  loadEmployess() {
    this.empservice.getEmployees().subscribe(res => {
      this.employees = res;
    }, (err) => {
      this.errormessage = err;
      console.log(err);
    });
  }


  addEmployee() {
    debugger;
   //this.empservice.InsertEmployee()
   this.empservice.InsertEmployee(this.employee).subscribe((res) => {
     alert("Successfully added an Employee :" + res);
     this.loadEmployess();
     this.employee = new Employee();
   }, (err) => {
       alert("Error Occured Plese try again");
   })
  }

  GetEmployee(employee: Employee) {
    //where conditions
    const emp = this.employees.filter(x => x.pkemployeeId == employee.pkemployeeId);
    if (emp.length > 0) {
      this.employee = emp[0];
    }
  }

  updateEmployee() {
    if (this.employee) {
      if (this.employee.pkemployeeId > 0) {
        this.empservice.UpdateEmployee(this.employee).subscribe((res) => {
          alert("Successfully updated  Employee :" + this.employee.pkemployeeId);
          this.loadEmployess();
          this.employee = new Employee();
        });

      }
    }
  }

  deleteEmployee(id: number) {
    this.empservice.DeleteEmployee(id).subscribe(res => {
      alert("Successfully Deleted an Employee :" + res.pkemployeeId);
      this.loadEmployess();
    });
  }

}
