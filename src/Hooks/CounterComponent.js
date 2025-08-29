import React, {useEffect, useState} from "react";

const CounterComponent =() => {
const [count, setCount] = useState(0);

useEffect(() => {
    console.log(`Count value changed: ${count}`);
}, [count])
let IncrementValue =() =>{
    if(count >= 0) {
    setCount(count+1);
    }

}

let DecrementValue =() =>{
    if(count > 0) setCount(count-1);  
    
}

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncrementValue}>Increment</button>
            <button onClick={DecrementValue}>Decrement</button>
        </div>
    )
}

export default CounterComponent;