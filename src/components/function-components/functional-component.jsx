import React from "react";

export const DisplayComponent = ()=> {
    return (<div>
        <form method='get'>
            <fieldset>
                <legend>Log In</legend>
                <label for='name'>Username</label>
                <input id ='name' type='text'/><br/>
                <label for='pwd'>Password</label>
                <input id='pwd' type='password'/><br/>
                <button>Submit</button>
            </fieldset>

        </form>
    </div>)
}