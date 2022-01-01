import React, { Component } from 'react'

export default class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            uname:"jyothi",
            pword:"1234"
        }
    }

    changeUserName=(event) =>{
        this.setState({
            uname:event.target.value,
            
        })
    }
    changePword=(event) =>{
        this.setState({
            pword:event.target.value,
            
        })
    }
    submitUserData=(event) =>{
        event.preventDefault() 
            console.log(`${this.state.uname} ${this.state.pword}`)
        
    }
    
    render() {
        return (
            <div>
               <form onSubmit={this.submitUserData} method='get'>
                   
                   <label>Name:</label>
                   <input type="text" value={this.state.uname} 
                    onChange={this.changeUserName}
                   />
                   <br></br>
                   <label>Email:</label>
                   < input type="text" value={this.state.pword}
                     onChange={this.changePword}
                   />
                   <br></br>
                   <button type="submit">Login</button>
                   </form> 
            </div>
        )
    }
}
