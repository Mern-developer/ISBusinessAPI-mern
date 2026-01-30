import { useEffect, useState } from "react"
import finhub from "../apis/finhub"
import { Link } from "react-router-dom";

export const MergerNews = ({ newsCategory }) => {
   const [merger,setMerger]=useState([]);

    // https://finnhub.io/api/v1/news?token=d5r5ki9r01qqqlh9v4cgd5r5ki9r01qqqlh9v4d0&category=merger&minId=10
useEffect(()=>{
 const fetchData=async ()=>{
     try{
        const response = await finhub.get('/news',{
            params:{
                category: newsCategory
            }
        })  

        console.log(response, "-----")
        setMerger(response)

     }catch(error){
        console.log("Error:",error)
     }
 }
 fetchData()
},[newsCategory])



    console.log("Is this rendering Merger")
    return (
        <div className="border">
            <h1 className="text-center">{newsCategory} News</h1>
            <div className="container">
                <div className="row g-4">
                    {merger?.data?.map((item, id) => {
                        return (
                            <div key={id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card" >
                                    <div className="">
                                    <img src={item?.image} className="card-img-top w-100 h-100" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item?.headline}</h5>
                                        <p className="card-text">{item?.summary}</p>
                                        <Link href={item?.url} className="btn btn-primary" rel="noreferrer" target="_blank">Visit</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>)
}