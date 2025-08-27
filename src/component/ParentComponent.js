import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

 ParentHandler =(name) =>{
    alert('Hello Anil from Parent Component' + name);
 }
  render() {
    return (
      <div>
       <ChildComponent  callMethod = {this.ParentHandler}/>
      </div>
    );
  }
}
export default ParentComponent;