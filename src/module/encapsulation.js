class Student
{
    constructor()
    {
        let name,marks;
    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks=marks;
    }
}
let stu=new Student();
stu.setName("john");
stu.setMarks(5410);

console.log(stu.getName(),stu.getMarks());