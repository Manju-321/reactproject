// let a = ["d","g","y","e","u","w","t","l","h","m","s","a"]

// for(let i=3;i<=a.length-1;i++){
//     console.log(a[i])
// }

// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }

// let mid=a.length/2

// for (let i= mid; i<=a.length-1; i++)
// {
//     console.log(a[i])
// }
// for(let i=mid;i>=0;i--){
//     console.log(a[i])
// }  


// let a = [5,4,3,2,1,0]

// for(let i=0;i<=5;i++){
//     console.log(a[i])
// }
// for(let i=5;i>=0;i--){
//     console.log(a[i])
// }

// let mid = [a.length/2]

// for(let i=mid;i<=a.length-1;i++){
//     console.log(a[i])
// }

// for(let i=mid-1;i>=0;i--){
//     console.log(a[i])
// }

// let a = ["ram","sam","tom","bhim","trim","com","earn","dart"]

// for(let i=0;i<=3;i++){
//     console.log(a[i])
// }
// for(let i=a.length-1;i>=5;i--){
//     console.log(a[i])
// }
// for(let i=0;i<=a.length-1;i++){
//     console.log(a[i])
// }
// const bodyload=()=>{
// pic.height="600";
// btnlogin.value="Login";
// }
// let x = prompt("enter a number");
// if(x%2==0){
//     alert("valid")
// }else{
//     alert("invalid");
// }
// let a = [35,36,37,38,39,40,41,42,43,44,45,46];
// let b = a.length-1;

// for(i=0; i<=b; i++){
// }

// let a = [9,99,999,9999,99999]
// let b = a.length-1;
// for(i=b; i>0; i--){
//     console.log(a[i]);
//                   }
// let a = [24,35,78,96,62,24,51,31,55]
// let b = a.length-1;

// for(let i=0; i<=b; i++){
//     if(a[i]>34){
//         console.log("Pass");
//     }else{
//         console.log("fail");
//     }
// }
//
// let a = ['ram','sam','tom','siv'];
// let b = [85,20,70,50];

// for(let i=0; i<=3; i++){
//     console.log(a[i]+"  "+b[i]);
//     if(b[i]>80){
//         console.log("Grade A");
//     }else if(b[i]>60){
//         console.log("Grade B");
//     }else if(b[i]>40){
//         console.log("Grade C"); 
//     }else{
//         console.log("Grade D");
//     }
//     console.log();
// }


// let a = [1,2,3];      //b = []
// let b = a.map(x=>10*x);
// //let c = [12,2,3,5,6,8].map(function(x){console.log("calculating"); return 10*x})
// let c = [12,2,3,5,6,8].map(x=>{console.log("calculating"); return 10*x})
// console.log(c);

// let a = [10,20,30,40]
// // let b = a.map(x=>2*x)
// // let b = a.map(x=>{console.log(a); return 10*x})
// // let b = a.map(function(x){return  10*x})
// let b = a.map(function(x){console.log("Answer is :");return 10*x})
// console.log(b)


// let a = [1,5,7,9,4,6,3]
// let b = a.filter(x=>x>=60);
// console.log(b);



// let a = [1,2,5,8,5,9,6,3];
// // let b = a.sort();
// let b = a.sort().reverse();
// console.log(b);

// let a = new Object();
// let a1 = {"name":"raju"   ,   "phone":1234}

// let k = Object.keys(a1);
// let v = Object.values(a1);
// console.log(k);
// console.log(v);
// console.log(a1);

//console.log(a1);


// let ip = [1,2,3];
// let op = [];

// let f1 = function(x){return 10*x}
// for(let i=0; i<ip; i++){
//     op.push(f1(ip[i]))
// }

// let a = [1,2,3,4];
// let b = a.map(x=>10*x);
// console.log(b);

// let a = [1,2,3,5];
// let b = a.map(x=>10*x);
// console.log(b);

// let ip = [1,2,3]
// let op = [];

// for(let i=0; i<ip.length; i++){
//     op.push(ip[i]*10);
// }
// console.log(op);
// let f1 = function(x){return x*10};
// console.log(f1);
// //let c = [12,2,3,5,6,8].map(function(x){console.log("calculating"); return 10*x})

// let a = [1,2,3];
// // let c = a.map(function(x){return 10*x});
// let c = a.map(x=>10*x);
// console.log(c);

// let a = [1,55,88,99,66,44,22,33]
// let b = a.sort();
// let c = a.reverse();
// let d = a.sort().reverse();
// console.log(b);
// console.log(c);
// console.log(d);

// let a = new Object;
// let b = {name:"Manju",Mobile:9874563210};

// let k = Object.keys(b);
// let v = Object.values(b);

// console.log(k);
// console.log(v);
// console.log(b);

function Person(x,y,z){
    this.Person.firstname = x;
    this.Person.Lastnamr = y;
    this.Person.Age = z;
}
let raj = new Person("raju","ramesh",52);
console.log(x);
