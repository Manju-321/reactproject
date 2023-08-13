
// (**** inheritance ****)

// class A
// {
//    a=100;
//    display()
//    {
//        console.log(this.a);
//    }
// }
// class B extends A
// {
//     b=200;
//     show()
//     {
//         console.log(this.b);
//     }
// }
// oj=new B();
// oj.display();
// oj.show();

// (**** Method overriding ****)

class Bank{
    roi()
    {
        return 10.0;
    }
}
class Axis extends Bank{
    roi()
    {
        return 20.0;
    }
}
class SBI extends Bank{
    roi()
    {
        return 30.0;
    }
}

rbi=new SBI();
console.log(rbi.roi());

ax=new Axis();
console.log(ax.roi());

abi=new Bank();
console.log(abi.roi());