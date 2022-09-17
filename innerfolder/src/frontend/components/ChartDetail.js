import { useState } from 'react';
import Chart from 'react-apexcharts'
export const ChartDetail=({chartData, symbol})=>{
   const {day, week, year } = chartData;
    const [dateFormat, setDateFormat]=useState("24h")
    const setTimeHandle=()=>{
        switch (dateFormat) {
            case "24":
                return day; 
                break;
                
                case "7d":
                    return week; 
                    break;
                    
                    case "1y":
                        return year; 
                        break;
                        
                        default:
                            return day;
                        }
                    } 

                    
        //    const color = setTimeHandle()[setTimeHandle().length - 1].y - setTimeHandle()[0].y > 0 ? 'true' : 'false'
        //    console.log(color);         

     const options= {
        // colors: [color],
        title:{
            text: symbol,
            align: "left",
            style:{
                fontStyle: "24px",
            }
        },
        chart:{
            id: "stock data",
            animation:{
            speed: 1300
            }
        },
        xaxis:{
            type: 'datetime',
            labels: {
            datetimeUTC: false
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM HH:mm'
            },
    }
}
    const series=[{
        name: symbol,
        data: setTimeHandle()
    }]
   
   const buttonColor =(btn)=>{
        switch (dateFormat) {
            case btn:
                return "btn btn-primary m-1"
                break;
            default:
                return "btn btn-outline-primary m-1";
        }
    }
    
   
   
   return(
        <div>
           <div> <a href="/" className='btn btn-primary '>Back</a></div>
        <div className='mt-5 p-3 shadow-sm bg-light mx-auto'>
            <Chart options={options} series={series} type="area" width="100%"/>
        <div>
            <div>
                   <button title="24 hours data" className={buttonColor("24h")}  onClick={()=> setDateFormat("24h")} >24h</button>
                   <button title="7 days data" className={buttonColor("7d")} onClick={()=> setDateFormat("7d")} >7d</button>
                   <button title="1 year data"  className={buttonColor("1y")} onClick={() => setDateFormat("1y")} >1y</button>
                </div>
        </div>
        </div>
        </div>
)
}