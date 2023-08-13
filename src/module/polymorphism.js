class Shape
{
    draw()
    {
        return "I am generic";
    }
}
class Square extends Shape
{
    draw()
    {
        return "I am Square";
    }
}
class Circle extends Square
{
    draw()
    {
        return "I am Circle";
    }
}
let s=new Circle();
console.log(s.draw());

s=new Square();
console.log(s.draw());

s=new Shape();
console.log(s.draw());