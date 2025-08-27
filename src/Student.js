import React, { Component } from "react"

class Student extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            name: "Bhatia"
        }
    }
    onChangeName=()=>{
        this.setState({
            name: "Anil Bhatia"
        })
    }
    render() {
        return (
            <div>
                <h1>This is Student Component : {this.state.name}</h1>
                <button onClick={()=> this.onChangeName()}>click</button>
            </div>
        )
    }
}
export default Student;