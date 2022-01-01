import React, { Component } from 'react'
import './States.css'

export default class StateinclassComponent extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
                name:"Jyothi",
                count:0
          }
      }
      
    render() {
        setTimeout(() => {
            this.setState({
                name:"Jyothi"
                
    
            })
        },2000
        )
        return (
            <div className='demo'>
                <h1>
                    welcome{ this.state.name}</h1>
                    <h1>count: {this.state.count}</h1>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                    }}>Increment Count</button>
                    <br></br>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count-1
                        })
                    }}>Decrement Count</button>
                    <br></br>
                    <button onClick={()=>{
                        this.setState({
                            count:0
                        })
                    }}>Reset</button>
            </div>
        )
    }
}
