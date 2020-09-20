using System;
using System.Collections.Generic;

namespace AngularAppUsingCoreApp.Models
{
    public partial class Employee
    {
        public int PkemployeeId { get; set; }
        public string EmployeeName { get; set; }
        public decimal EmployeeSalary { get; set; }
        public bool IsActive { get; set; }
    }
}
