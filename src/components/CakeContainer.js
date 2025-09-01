import React from "react";
import { buyCake } from "../redux/cake/cakeAction";

import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    const dispatch = useDispatch()

    return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Number of Cakes: {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
    )
}
export default CakeContainer;
