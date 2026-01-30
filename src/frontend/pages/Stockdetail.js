import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import finhub from "../apis/finhub";
import { ChartDetail } from "../components/ChartDetail";
import { StockData } from "../components/StcockData";

const formatData=(data)=>{
  return data.t.map((el, i)=>{
    return {
        x: el * 1000,
        y: data.c[i].toFixed(2)
    }
  })
}
export const Stockdetail = () => {
    const { symbol } = useParams();
    const [chartData, setChartData]=useState([]);
useEffect(()=>{
const fetchData= async ()=>{
    const date = new Date();
    const currTime = Math.floor(date.getTime() / 1000)
    let oneDay;
    let week;
    let oneYear;
    if(date.getDay() === 6){
        oneDay =currTime - 2 * 24 * 60 * 60;
    }else if (date.getDay() === 0){
        oneDay = currTime - 3 * 24 * 60 * 60;
    }else{
        oneDay = currTime - 24 * 60 * 60;
    }
    week = currTime - 7 * 24 * 60 * 60;
    oneYear = currTime - 365 * 24 * 60 * 60;
    try{
        const responses = await Promise.all([
                    finhub.get("/stock/candle", {
                params: {
                    symbol,
                    from: oneDay,
                    to: currTime,
                    resolution: 30 
                }
            }),
             finhub.get("/stock/candle", {
                params: {
                    symbol,
                    from: week,
                    to: currTime,
                    resolution: 60 
                }
            }),
             finhub.get("/stock/candle", {
                params: {
                    symbol,
                    from: oneYear,
                    to: currTime,
                    resolution: "W" 
                }
            })
        ]) 
         console.log(responses,'Detail')
        setChartData({
            day: formatData(responses[0].data),
            week: formatData(responses[1].data),
            year: formatData(responses[2].data)
        })

    }catch(err){
        console.log(err,'fetch graph data ')
    }
}
fetchData()
}, [symbol])

// useEffect(() => {
//   const fetchData = async () => {
//     const date = new Date();
//     const currTime = Math.floor(Date.now() / 1000);
//     const day = date.getDay();

//     let oneDay;
//     if (day === 6) oneDay = currTime - 1 * 86400;
//     else if (day === 0) oneDay = currTime - 2 * 86400;
//     else oneDay = currTime - 86400;

//     const week = currTime - 7 * 86400;
//     const oneYear = currTime - 365 * 86400;

//     const toTime = currTime - 4 * 3600; // market close buffer

//     try {
//       const [dayRes, weekRes, yearRes] = await Promise.all([
//         finhub.get("/stock/candle", {
//           params: { symbol, from: oneDay, to: toTime, resolution: 15 }
//         }),
//         finhub.get("/stock/candle", {
//           params: { symbol, from: week, to: toTime, resolution: 60 }
//         }),
//         finhub.get("/stock/candle", {
//           params: { symbol, from: oneYear, to: toTime, resolution: "W" }
//         })
//       ]);

//       setChartData({
//         day: formatData(dayRes.data),
//         week: formatData(weekRes.data),
//         year: formatData(yearRes.data)
//       });

//     } catch (err) {
//       console.error("Fetch graph data error:", err);
//     }
//   };

//   fetchData();
// }, [symbol]);

    return(
   <div>
       {chartData && ( 
           <div> 
            {/* <ChartDetail chartData={chartData} symbol={symbol} /> */}
            <div className="my-5">
            <StockData  symbol={symbol} />
            </div>
           </div>
       )}
   </div>
    ) 
}

//-=-===- following format data is required for chart
// const chartData ={
//     day: "data for one day",
//     week: "data for week",
//     year: "data for a year"
// }

// const data = [{ x: 4, y: 5 }, { x: 14, y: 51 }]