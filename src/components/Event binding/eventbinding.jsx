import React from "react";

const Eventbinding=()=>{

    // const[data,setData] = setData([]);
    
    var venu="Venugopal";

    function handleButtonClick(e){
         console.log("handleButtonClick",e);
    }
    function handleInputClick(e){
        console.log("handleInputClick")
    }
    return(
        <div className="container-fluid">
            <h2>Event bind</h2>
            <button value="Manju" onClick={handleButtonClick}>Submit</button>
            {/* <input type="text" value="Suresh" onClick={handleInputClick}/> */}
            {/* <input type="text" value="Suresh" onClick={handleInputClick()}/> */}
            <input type="text" onClick={()=>handleInputClick()}/>
        </div>
    )
}
export default Eventbinding;