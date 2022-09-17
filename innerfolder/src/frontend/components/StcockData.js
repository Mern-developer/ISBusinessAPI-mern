import { useEffect, useState } from "react"
import finhub from "../apis/finhub"

export const StockData=({symbol})=>{
        const [sprofile,setSProfile]=useState([]);

    useEffect(()=>{
    const fetchData= async ()=>{
    try{
        const response = await finhub.get('stock/profile2',{
        params:{
            symbol           
        }
    })   
        console.log(response.data)
        setSProfile(response.data)
    }catch(err){
        console.log(err)
    }
    
    }
    fetchData();
   },[symbol])


    return( 
    sprofile ? ( 
   <div> <h4>Stock Profile Data</h4>
    <div className="row border bg-white rounded shadow-sm p-4 mt-5">
        <div className="col-md-4">
            <div> <span className="fw-bold">Name:</span> &nbsp; {sprofile.name}</div>
                        <div> <span className="fw-bold">Country:</span>&nbsp; {sprofile.country}</div>
                        <div> <span className="fw-bold">Currency:</span> &nbsp; {sprofile.currency}</div>
        </div>
        <div className="col-md-4">
                        <div> <span className="fw-bold">Ticker:</span> &nbsp; {sprofile.ticker}</div>
                        <div> <span className="fw-bold">Exchange:</span> &nbsp; {sprofile.exchange}</div>
                        <div> <span className="fw-bold">IPO:</span> &nbsp; {sprofile.ipo}</div>

        </div>
        <div className="col-md-4">
                        <div> <span className="fw-bold">Logo:</span> &nbsp; <img src={sprofile.logo} width="25px" /> </div>
                        <div> <span className="fw-bold">M.CAP:</span>&nbsp;{sprofile.marketCapitalization}</div>
                        <div> <span className="fw-bold">URL:</span>&nbsp;<a href={sprofile.weburl} target="_blanck">{sprofile.weburl}</a></div>

        </div>



    </div>
   
    
    
    
    </div>) : (<div> no Data is found</div>)

    
)}