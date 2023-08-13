import React from "react";

export class Mount extends React.Component
{
    componentDidMount(){
        alert(`Login C`)
    }
    render(){
        return(
            <div>
                <h2>User Login</h2>
            </div>
        )
    }
}