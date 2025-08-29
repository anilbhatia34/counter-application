import React, { useState } from "react";

const ControlledForm =() => {
    const [name, setName]= useState("Anil");
     const [submittedValue, setSubmittedValue] = useState("");
    let handleSubmit =(e) =>{
        e.preventDefault(); 
       name === "" ? alert("Please enter a name") : setSubmittedValue(name);
    }
    return (
        <div>
            <form onSubmit ={handleSubmit}>
            <label>Enter The Name</label>
            <input type="text" value ={name} onChange={(e)=> setName(e.target.value)} />
            <button type="submit">Submit</button>
            </form>

            <div>Submited Value: {submittedValue}</div>
        </div>
    )
}
export default ControlledForm;