
// // (* prototype with function *)

// function student()
// {
//     this.name="manju",
//     this.age=21
// }

// student.prototype.age=25;

// stu1=new student();
// console.log(stu1.name,stu1.age);

// stu2=new student();
// console.log(stu2.name,stu2.age);


// (* prototype with class *)

class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.sal=500000;

Employee.prototype.display=function()
{
    console.log(this.eid,this.ename,this.sal);
}

emp1=new Employee(101,"manju");
emp1.display();

emp2=new Employee(102,"john");
emp2.display();