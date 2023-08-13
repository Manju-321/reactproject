// import { useState } from "react";

// const Class=()=>{
//     const [cities] = useState(["Delhi","Hyd","Mumbai","Chennai","Bangalore"]);
//     const [buttonClass, setButtonClass] = useState('bi bi-sort-alpha-down');

//     function handleSortClick(e){
//         if(e.target.className=="bi bi-sort-alpha-down") {
//             setButtonClass('bi bi-sort-alpha-up');
//             cities.sort();
//         } else {
//             setButtonClass('bi bi-sort-alpha-down');
//             cities.sort();
//             cities.reverse();
//         }
//     }

//     return(
//         <div className="container-fluid mb-3">
//             <h2 className="mt-3">Cities List <button onClick={handleSortClick} className="btn btn-success"> <span className={buttonClass}></span> </button> </h2>
//             <ol>
//                 {
//                     cities.map(city=>
//                         <li key={city}>{city}</li>
//                         )
//                 }
//             </ol>
//         </div>
//     )
// }
// export default Class;
import React,{useState} from "react";

const Class=()=>{

    const [cities] = useState(["Hyderabad","Bangalore","Mumbai","Chennai","Delhi"],[]);
    const [buttonClass,setButtonClass] = useState('bi bi-sort-alpha-down');

    function handleSortClick(e){
        if(e.target.className=="bi bi-sort-alpha-down"){
             setButtonClass('bi bi-sort-alpha-up');
             cities.sort();
        } else {
            setButtonClass('bi bi-sort-alpha-down');
            cities.sort();
            cities.reverse();
        }
    }

    
    
    return(
        <div className="container-fluid">
            <h1 className="mt-5">Cities Lists <button onClick={handleSortClick} className="btn btn-primary"><span className={buttonClass}></span></button></h1>
            <ul>
                {
                    cities.map(city=>
                        <li key={city}>{city}</li>)
                }
            </ul>
        </div>
    )
}
export default Class;