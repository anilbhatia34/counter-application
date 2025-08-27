import React, { Component } from "react";

class EventBind extends Component {
   
   constructor(props) {
   
        super(props);
        // this.ChangeName = this.ChangeName.bind(this);
        this.state = {
            name: 'Anil'
        };
    } 
   ChangeName=()=> {
           this.setState({
            name: 'Reena'
   })
   }

    render()  {
        return (
            <div>
                <h2>Event Binding Example {this.state.name}</h2>
                <button onClick={this.ChangeName}>Click Me</button>
            </div>
        );
    }
 }

 export default EventBind;