import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usernamer:"",
             email:"",
             comment:""
        }
        this.message=this.message.bind(this)
    }
    changev=(e)=>{
        this.setState({
            usernamer:e.target.value
        })
    }
    changeE=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    changeC=(e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    message=()=>{
    alert("Thank you! you will get a mail soon")
    }
    render() {
        return (
            <div>
            <div className="d1">
           <div className="get">
               <h2>Get in Touch</h2>
               <p>Feel free to drop your message below!</p>
               <input type="text" value={this.state.usernamer} onChange={this.changev} placeholder="Your name" required/>
               <input type="email" value={this.state.email} onChange={this.changeE} placeholder="Your email" required/>
               <textarea value={this.state.comment} onChange={this.changeC} placeholder="Type your message here" rows="5" required></textarea>
              <div className="center"> <button onClick={this.message}>Send</button></div>
           </div>
            </div> 
         </div>
        )
    }
}

export default Form