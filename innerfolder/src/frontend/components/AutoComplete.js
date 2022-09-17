import { useContext, useEffect, useState } from "react"
import finhub from "../apis/finhub";
import { WatchListContext } from "../context/W.Lcontext";

export const AutoComplete = () => {
const[search, setSearch]=useState("");
const[result, setResult]=useState([]);
const { addStock } =useContext(WatchListContext)
const renderDropdown=()=>{
    let checkSearch = search ? "show" : null
    return(
    <ul style={{height: '500px', overflowX: 'hidden', overflowY: 'scroll', cursor:'pointer'}} 
    className={`dropdown-menu ${checkSearch}`}>
        {result.map((res)=>{
            return(
                <li onClick={()=> {addStock(res.symbol); setSearch("")}} key={res.symbol} className="dropdown-item">{res.description}{''}({res.symbol})</li>
            )
        })}
    </ul>
    )
}

useEffect(()=>{
    let isMounted = true;
const fetchData= async()=>{
try{
const response = await finhub.get('/search',{
    params:{
        q: search
    }
});

console.log(response);
if(isMounted){
    setResult(response.data.result)
}
}catch(err){
    console.log(err)
}
}
if(search.length > 0){
    fetchData();
}
return ()=>( isMounted = false );
},[search])
    return (
<div className="vw-50 p-5 rounded mx-auto">
    <div className="form-floating dropdown">
        <input onChange={(e)=> setSearch(e.target.value)} 
        value={search} autoComplete="off" style={{background: "rgba(145,158, 171, 0.04)"}} 
                    id="floatingInput" type="text" className="form-control shadow"></input>
        <label for="floatingInput">Search</label>
         {renderDropdown()}           
    </div>

</div>




    )
}