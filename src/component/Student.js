import React from "react";

const Student= () => {

// const name  =["Anil","Sunil","Kiran","Ravi"];
const student = [
    {name:"Anil",age:24},
    {name:"Sunil",age:25},  
    {name:"Kiran",age:26},
    {name:"Ravi",age:27},
    
]
const studentNames = student.map((std)=> <li key={std.name}>Name: {std.name}, Age: {std.age}</li> );
  return (
    <div>
    { <ul>{studentNames}</ul>}      
    </div>
  );
}

export default Student;