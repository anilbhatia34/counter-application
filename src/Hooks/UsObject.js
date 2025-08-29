import React , {useState} from "react";

const UsObject = () => {

    let obj = {
        name:"Anil",
        age:24, 
        city:"Pune",
        height:5.9,
        toYoung: true
        };
     const   [ person, setPerson ] = useState(obj);
        const updatePerson = () =>{
            setPerson(previousState => {
                return {...previousState, name:"Sunil"}
            })
        }
    return (
        <div>
             <ul>
                <li >Name: {person.name}</li>
                <li >Age: {person.age}</li>
                <li >City: {person.city}</li>
                <li >Height: {person.height}</li>
                <li >toYoung: {person.toYoung.toString()}</li>
            </ul>
            <button onClick={updatePerson}>Update Student</button>
        </div>
    )
}

export default UsObject;