import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';import { Employee } from '../model/employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = environment.APIURL + "EmployeesAPI";
  constructor(private httpclient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    debugger;
    return this.httpclient.get<Employee[]>(this.url).pipe(retry(3), catchError(this.handleError)    );
  }


  InsertEmployee(employee: Employee): Observable<number> {
    debugger;
    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    "Content-Type": "application/json",
    //    "Authorization": "Bearer xxxxxxxxx"
    //  })
    //}
    return this.httpclient.post<number>(this.url, employee);
  }

  UpdateEmployee(employee: Employee) {
    debugger;
    const putURL = this.url + "/" + employee.pkemployeeId;

   //const httpOptions = {
   //   headers: new HttpHeaders({
   //     "Content-Type": "application/json",
   //     "Authorization": "Bearer xxxxxxxxx"
   //   })
   // }
    return this.httpclient.put<any>(putURL, employee);
  }


  DeleteEmployee(id: number): Observable<Employee> {
    const deleteURL = this.url + "/" + id;
    return this.httpclient.delete<Employee>(deleteURL);
  }

  handleError(handleError: HttpErrorResponse): import("rxjs").OperatorFunction<Employee[], any> {

    throw new Error("Error Occured, Please try again");
  }





  //private handleError(error: HttpErrorResponse) {
  //  return throwError(
  //    'Something bad happened; please try again later.');
  //};
}
