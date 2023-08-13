import React from "react";

class Component extends React.Component{
    constructor(){
        super();
        this.state = {
            show : true,
            count : 0
        };
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    componentDidMount(){
        console.log("Component Did Mount Method")
    }
    componentDidUpdate(){
        console.log("Component Did Update Method")
    }
    
    render(){
        let myheader;
        if(this.state.show){
            myheader = <ComponentChild/>;
        };
        return(
            <div className="container-fluid">
                <div>
                    {myheader}
                    <button type="button" onClick={this.delHeader}>Delete Header</button>
                    <h3>count : {this.state.count}</h3>
                    <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                </div>
            </div>
        )
    }
}

class ComponentChild extends React.Component{
    componentWillUnmount(){
        console.log("Component Will Unmount")
    }
    render(){
        return(
            <h1>Hello World !!!</h1>
        )
    }
}
export default Component;