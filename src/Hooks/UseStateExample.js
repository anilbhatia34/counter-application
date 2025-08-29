import React, {useState } from "react";

const UseStateExample = () => {
    const [name, setName] =useState("Anil");

    const ChangeName = () =>{
        setName("Sunil");
    }
    return (
        <div>
            <h1>Update Name {name}</h1>
            <button onClick = {ChangeName}>Click Me</button>
        </div>)
}

export default UseStateExample;