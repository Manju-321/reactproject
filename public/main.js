// function Manju(){
//     var x;
//     x=10;
//     {
//         var y = 20;
//     }
//     document.write(`x=${x}<br>y=${y}`);
// }
// Manju();
{/* <h2>Var</h2> */}
//  const Manju=()=>{
//     var x; //Declaration
//     x=10;  //Assigning
//     {
//         var y = 20;  //initialization 
//     }
//     document.write(`x=${x}<br>y=${y}`);
// }
// Manju();

// const Manju=()=>{
//         var x;
//         x=10;  
//         {
//             var y = 20;  //re-declaring
//             var y = 30;  //re-assigning
//         }
//         document.write(`x=${x}<br>y=${y}`);
//     }
//     Manju();

// const Manju=()=>{
//     x = 10;        //
//     document.write(`x=${x}`);
//     var x;
// }
// Manju();

// const Manju=()=>{
//     let x;
//     x=10;
//     {
//         var y = 20;
//     }
//     document.write(`x=${x}<br>y=${y}`);
// }
// Manju();

// const name = "Jhon";
// const age = 21;

// document.write('My name is ' + name + '<br/>' + 'and age is ' + age );
// 

// const todos = [
//     {
//         id:1,
//         text:'Take',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'meeting',
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:'dentist',
//         isCompleted:true
//     },
// ];
// const todoJSON = JSON.stringify(todos)
//     console.log(todoJSON);

    //for(let i=10; i>=0;i--){
    //     console.log(i);
    // }
    // for(let j=0;j<=10;j++){
    //     console.log(j);
    // }

    // let i = 0;
    // while(i <= 10) {
    //     document.write(`While Loop Number:${i}<br>`);
    //     i++;
    // }

    // const todos = [
    //     {
    //         id:1,
    //         text:'Take',
    //         isCompleted:true
    //     },
    //     {
    //         id:2,
    //         text:'meeting',
    //         isCompleted:true
    //     },
    //     {
    //         id:3,
    //         text:'dentist',
    //         isCompleted:true
    //     },
    // ];
    //  for(let i = 0; i < todos.length;i++){
    //     console.log(todos[i].text);
    //  }
    const todos = [
        {
            id:1,
            text:'Take',
            isCompleted:true
        },
        {
            id:2,
            text:'meeting',
            isCompleted:true
        },
        {
            id:3,
            text:'dentist',
            isCompleted:true
        },
    ];
    for(let todo of todos){
        console.log(todo.text);
    }
    // const todos = [
    //     {
    //         id:1,
    //         text:'Take',
    //         isCompleted:true
    //     },
    //     {
    //         id:2,
    //         text:'meeting',
    //         isCompleted:true
    //     },
    //     {
    //         id:3,
    //         text:'dentist',
    //         isCompleted:true
    //     },
    // ];

    