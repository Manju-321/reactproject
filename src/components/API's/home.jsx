// import React from "react";

// const Home=()=>
// {
//     return(
//         <div className="container-fluid">
//             <h1>Shopping Products</h1>
//         </div>
//     )
// }
// export default Home; 
// import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';

//  class Home extends Component {
//     // const param = useParams();
//   constructor(props) {
//     super(props);
//     this.state = {
//       previous1: 1,
//       previous2: 0,
//     };
//     this.clickDecrease = this.clickDecrease.bind(this);
//     this.clickIncrease = this.clickIncrease.bind(this);
//   }

//   clickIncrease(e) {
//     let a = this.state.previous1 + this.state.previous2;
//     this.setState({
//       previous1: a,
//       previous2: this.state.previous1,
//     });
//   }

//   clickDecrease(e) {
//     this.setState({
//       previous1: this.state.previous2,
//       previous2: this.state.previous1 - this.state.previous2,
//     });
//   }

//   render() {
//     return (
      
//         <div>
//         The current number is: {this.state.previous1}
//         <br />
//         <button onClick={this.clickDecrease} className="btn btn-danger">
//           -
//         </button>
//         <button onClick={this.clickIncrease} className="btn btn-primary">
//           +
//         </button>
//       </div>
      
//       );
//   }
// }
// export default Home;
import React, { useState } from 'react';


//   const [previous1,setpPrevious1] = useState(0);
//   console.log(useState)
//  const data= 21;
//  function Add(){
// setpPrevious1(previous1+2)
//  }
//  const Home=()=>{

//     const [data,setData] = useState(100);
//     const [term,setTerm] = useState(10);
//     function Add(){
//         setData(data+1)
//     }
//     function mul(){
//         setTerm(term+data)
//     }
//     function Sub(){
//         setData(data-1)
//     }
const Home=()=>
{
    const [first,setFirst] = useState(1);
    const [second,setSecond] = useState(0);
    function clickIncrease(){
        let a = first + second;
        // console.log(a)
        setFirst(a);  
        setSecond(first);
        console.log(first);
    }
    function clickDecrease(){
        setSecond(first - second);
        setFirst(second);
        console.log(second);
    }
  return(
    
    <div className='container-fluid'>
        <p>Current number is : {first}</p><br/>
        <button className="btn btn-warning" onClick={clickIncrease}>+</button>
        <button className="btn btn-primary" onClick={clickDecrease}>-</button>
    </div>

//     <div>
//     The current number is: {first}
//     <br />
//     <button onClick={clickDecrease} className="btn btn-danger">
//       -
//     </button>
//     <button onClick={clickIncrease} className="btn btn-primary">
//       +
//     </button>
//   </div>
);
}

export default Home;