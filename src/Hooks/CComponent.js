import React, { useContext } from "react";
import { NameContext } from "../App";
const CComponent= () => {
   const name= useContext(NameContext)
    return (
        <div>This Is component C and I got The name  : {name}</div>
    )
}
export default CComponent;