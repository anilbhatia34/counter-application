import React, { useState} from  "react";

const UsArray = () => {
   const numbers = [1,2,3,4,5];
   const [number, setNumber] = useState(numbers);
  let changeValue = () =>{
    setNumber(previousState => {
        return [...previousState,Math.floor(Math.random()*50)]
    })
  }

    return (
        <div>
        {number.map((num, index)=> <li key={index}>{num}</li>)}
        <button  onClick= {changeValue}>Update Number</button>
        </div>
    )
}
export default UsArray;