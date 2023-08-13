// (Functions)

// add=(a,b)=>{
// console.log(a+b); //with arguments
// }
//  add(10,20);

// add=(a,b)=>{
//     return(a+b); //with arguments
// }
// let res=add(20,30);
// console.log(res);

// greetings=()=>{
//     console.log("How are you...?"); 
// }
// greetings();

// greetings=()=>{
//     return("hey good morning...");
// }
// let msg=greetings();
// console.log(msg);

// (**************(Object)************)

// let person={
//     firstname:"john",
//     lastname:"kenedy",
//     weight:41,
//     age:33,
// }
// console.log(person.firstname);
// console.log(person.lastname);

// // Add new property
// person["height"]=5.5;
// console.log(person["height"]);

// // Update property
// person.weight=54;
// console.log(person.weight);

// // Remove property
// delete person["age"];
// console.log(person["age"]);

// console.log("********** looping object*********");
// // for in loop
// for(let x in person)
// {
//     // console.log(x); //property names
//     // console.log(person[x]); //values of the property
//     console.log(x+" "+person[x]); //both property and value
// }

// (*********** Method *********)

let employee={
    empid:123,
    job:"developer",
    basicsal:100,
    bonus:function()
    {
        return(this.basicsal * 10/10);
    }
};
// console.log(employee.job); //developer
console.log(employee.bonus()); //100