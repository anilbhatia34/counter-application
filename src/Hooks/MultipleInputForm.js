import React, {useState} from "react";

const MultipleInputForm =() => {
    const [data, setData] = useState({
        name:"",
        email: ""
});

let HandleOnChange =(e)=>{
       setData({...data, [e.target.name]: e.target.value}) 
}
let HandleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
        alert("Please enter all the fields");
    } else {
        setTimeout(() => {
            alert(`Name: ${data.name} Email: ${data.email}`);
        }, 0);
    }
}
    return (
        <div>
            <form onSubmit ={HandleSubmit}>
                <label>Enter The Name</label>   
                <input type="text" name ="name" value ={data.name} onChange={HandleOnChange} />
                <label>Enter The Email</label>  
                <input type="email" name ="email" value ={data.email} onChange={HandleOnChange} />
                <button type="submit">Submit</button>
            </form>

            <span>Name: {data.name} </span><br/>
            <span>Email: {data.email} </span>
        </div>
    )
}       
export default MultipleInputForm;