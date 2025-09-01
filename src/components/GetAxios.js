import React , { useEffect} from "react";
import axios from "axios";
 const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const GetAxios = () => {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
        setData(response.data);
   //   console.log(response.data);
    })
  },[])
  
  return (  
    <div>
        {data.map((item)=>{
            return (
                <div key={item.id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}
export default GetAxios;