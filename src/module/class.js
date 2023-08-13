// class Student
// {
//     setDetails(sid,sname,grade)
//     {
//         this.sid=sid;
//         this.sname=sname;
//         this.grade=grade;
//     }
//     display()
//     {
//         console.log(this.sid,this.sname,this.grade);
//     }
// }
// let stu=new Student(11,"fdsaf","A");
// stu.setDetails();
// stu.display();

// (****** static & non-static ****)
class Test
{
    static a=10;
    b=20;
 static m1()
{
    console.log("This is m1 static methos...")
}
m2()
{
    console.log("This is m2 Non-static method...")
}
}
// (static)
console.log(Test.a);
Test.m1();

// (Non-static)
let t=new Test();
console.log(t.b);
t.m2();