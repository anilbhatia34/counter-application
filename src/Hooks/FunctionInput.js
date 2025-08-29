import React , {useState} from "react";

const FunctionInput =() => {

const [fruitArray, setFruitArray] = useState([]);


let ChangeHandle = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setFruitArray([...fruitArray, value]);
    } else {
        setFruitArray(fruitArray.filter((f) => f !== value));
    }
};

let HandleSubmit = (e) => {
    e.preventDefault();
    alert(`Fruits: ${fruitArray}`);
};

    return (
        <div>
           <form onSubmit={HandleSubmit}>
                <label>Enter The Fruit Name</label>   
                <br/>
                <input type="checkbox" name ="fruitName" value="apple" onChange={ChangeHandle} />
                <label>Apple</label>
                <br/>
                <input type="checkbox" name ="fruitName" value="banana" onChange={ChangeHandle} />
                <label>Banana</label>
                <br/>
                <input type="checkbox" name ="fruitName" value="grape" onChange={ChangeHandle} />
                <label>Grape</label>
                <br />
                <input type="checkbox" name ="fruitName" value="orange" onChange={ChangeHandle} /> 
                <label>Orange</label> 
                <br />
                <button type="submit">Submit</button>
                </form>
        </div>
    )
}       
export default FunctionInput;