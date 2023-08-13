// import React from "react";

// export class ClassDemo extends React.Component
// {
//     constructor(){
//         super();
//     }
//     handleLoginClick(e){
//         alert(`
//           Button id : ${e.target.id}\n
//           Button Name : ${e.target.name}\n
//           X Position : ${e.clientX}
//         `);
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <div className="container-fluid">
//                     <button onClick={this.handleLoginClick} id="btnLogin" name="Login">Login</button>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }



import React from "react";
import './class-demo.css';

class ToolbarTemplate extends React.Component
{
     constructor(props){
        super();
     }
     render(){
         if(this.props.layout=="vertical" ){
            return(
                <nav style={{height:"150px"}}>
                    <div className="bi bi-globe p-3"></div>
                    <div className="bi bi-whatsapp p-3"></div>
                    <div className="bi bi-cart p-3"></div>
                    <div className="bi bi-instagram p-3"></div>
                </nav>
            )
         } else {
            return(
                <nav className="d-flex">
                    <div className="bi bi-facebook p-3"></div>
                    <div className="bi bi-twitter p-3"></div>
                    <div className="bi bi-linkedin p-3"></div>
                    <div className="bi bi-instagram p-3"></div>
                </nav>
            )
         }
     }
}

export class ClassDemo extends React.Component
{
     constructor(){
        super();
        this.state = {
             viewLayout: ''
        }
     }
     handleLayoutChange(e){
         this.setState({
            viewLayout: e.target.value
         })
     }
     render(){
        return(
            <div className="container-fluid">
                <h2>Select a Toolbar Layout</h2>
                <div className="w-25">
                    <select onChange={this.handleLayoutChange.bind(this)} className="form-select">
                        <option value="-1">Select Layout</option>
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                <h3>Toolbar</h3>
                <ToolbarTemplate layout={this.state.viewLayout}/>
            </div>
        )
     }
}
export default ClassDemo;