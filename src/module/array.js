// let cars=["BMW","AUDI","ROLLS ROYCE",14523,true];
// console.log(cars); //Array stores different types of data

// let cars=new Array("slkjd","faduhuhd",false,55454);
// console.log(cars);

// let arr=[10,20,30,40,50]
// console.log(arr[1]); //Array accessing elements
// console.log(arr.indexOf[20]);
// cars[2]="rr"; //Array change the value
// console.log(cars);
// arr[2]=10;
// console.log(arr);

// (**********object in Array*********)
// let person1={
//     name:"john",
//     age:21,
//     stock:true,
//     rating:4.6
// };
// let person2={
//     name:"canady",
//     age:23,
//     stock:false,
//     rating:5.2
// };
// let newarray=[person1,person2];
// console.log(newarray);
// console.log(newarray[0]);
// console.log(newarray[1]);

// let cars=["BMW",14523,"AUDI",true,"ROLLS ROYCE"];
// console.log(cars.length); //5

// let fruits=["Mango","Banana","Apple","Orange"];
// console.log(fruits.length); //4


// (**********looping elements for array********)

// for(let i=0; i<=fruits.length-1; i++)
// {
//     console.log(fruits[i]);
// }

// (****Looping elements from array using for/of loop****)

// for(ele of fruits)
// {
//     console.log(ele);
// }
// for(ele of cars)
// {
//     console.log(ele);
// }

// for(let i=0; i<=fruits.length-1; i++)
// {
//     console.log(fruits[i]);
// }
// // recognize an array - typeof
// console.log(typeof fruits);

// console.log(Array.isArray(fruits));

// (**** JavaScript Array Methods ****)

// let bikes=["Splender Plus","Unicorn","Rx-100","Apache","Pulsar","Enfield"];
 
// console.log(bikes.length);
// console.log(bikes.toString()); //Splender Plus,Unicorn,Rx-100,Apache,Pulsar,Enfield
// //converting array into string with separation of comma
// console.log(bikes.join("*")); //Splender Plus*Unicorn*Rx-100*Apache*Pulsar*Enfield


// (*****concat*****)

// let arr1=[10,20,30];
// let arr2=["A","B","C"];
// console.log(arr1.concat(arr2));

// let arr3=["x","y","z"];
// console.log(arr1.concat(arr2,arr3));

// (******** slice() *******)

// let bikes=["Splender Plus","Unicorn","Rx-100","Apache","Pulsar","Enfield"];
// console.log(bikes.slice(1));
// console.log(bikes.slice(5));

// (******flat*****)

// let myArr = [[1,1],[2,2],[3,3]];
// let newArr = myArr.flat();
// console.log(newArr);

// (****** Splice ******)

// let bikes=["Splender Plus","Unicorn","uyuoyiuo","yut"];
// bikes.splice(1,0,"lemon","Orange");
// console.log(bikes);
// console.log(bikes.reverse());