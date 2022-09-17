import {useContext, useEffect, useState} from 'react'
import finhub from '../apis/finhub'
import { WatchListContext } from '../context/W.Lcontext';
import { useNavigate } from 'react-router-dom'

export const Stocklist = () => {
    const { watchList, deleteStock } =useContext(WatchListContext)
    const [stock, setStock]=useState([]);
    const navigate = useNavigate();
    const changeColor=(color)=>{
        return color > 0 ? "success" : "danger"
    }    
    
    useEffect(()=>{
    let isMounted = true;
    const fetchData=async ()=>{
        //const responses =[];
        try{
            const response =await Promise.all(watchList.map((stocks)=>{
                return finhub.get("/quote",{
                    params:{
                        symbol: stocks
                    }
                })
            })
                )
                const data =response.map((Resdata)=>{
                    return {
                        data: Resdata.data,
                    params: Resdata.config.params.symbol,
                    status: Resdata.headers.status       
                } 
            });  
            console.log(data);
            if(isMounted){
                setStock(data);
                // console.log("mount")
            } 
        }catch(err){
            
            if (err.message == "Request failed with status code 403")
            {
               console.log(err)
                navigate('/error')
                 }
                 else{
                    console.log(err)
                 }  
        }
    }
fetchData();
return ()=>(isMounted = false)
},[watchList] )  
    
    const handleStocldetail=(symbol)=>{
        navigate(`/stock-detail/${symbol}`)
    }
    return (
<div>
    <h4 className="text-center">List of Stocks</h4>
    <div className='table-responsive'>
                <table className='table table-striped hover mt-5 '>
<thead style={{color: "rgb(79,89,102)"}}>
    <tr>
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Last</th>
        <th scope="col">Chg</th>
        <th scope="col">Chg%</th>
        <th scope="col">High</th>
        <th scope="col">Low</th>
        <th scope="col">Open</th>
        <th scope="col">Pclose</th>
    </tr>
</thead>
<tbody>
    {stock.map((st, i)=>{
        return(
            <tr onClick={() => handleStocldetail(st.params)} className='table-row delete-row showHand' key={st.params}>
              <td>{i+1}</td>  
              <th>{st.params}</th>  
              <td>{st.data.c.toFixed(2)}</td>  
                <td className={`text-${changeColor(st.data.d)}`}>{st.data.d.toFixed(2)}
                    {st.data.d.toFixed(2) > 0 ? (<i className="fa-solid fa-caret-up"></i>) : (<i className="fa-solid fa-caret-down"></i>)}</td>  
                <td className={`text-${changeColor(st.data.dp)}`}>{st.data.dp.toFixed(2)}
                    {st.data.dp.toFixed(2) > 0 ? (<i className="fa-solid fa-caret-up inline-block"></i>) : (<i className="fa-solid fa-caret-down"></i>)}</td>  
                <td>{st.data.h.toFixed(2)}</td>  
                <td>{st.data.l.toFixed(2)}</td>  
                <td>{st.data.o.toFixed(2)}</td>  
                <td>{st.data.pc.toFixed(2)}
                    <button className="btn btn-danget ml-3 display-inline-block delete-icon btn-sm" onClick={(e)=>
                    {e.stopPropagation()
                            deleteStock(st.params)}}>Remove</button></td>  
            </tr>
        )
    })}
</tbody>
</table>
            </div>



</div>




    )
}