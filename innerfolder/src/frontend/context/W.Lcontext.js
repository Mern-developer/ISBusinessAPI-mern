import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const WatchListContext = createContext();
export const WatchListContextProvider = (props)=>{
        
    const [watchList, setWatchlist] = 
        useState(localStorage.getItem("watchlist") !== null ? JSON.parse(localStorage.getItem("watchlist")) : ["GOOGL", "MSFT", "AMZN"] )
        
        useEffect(()=>{
         localStorage.setItem('watchlist', JSON.stringify(watchList))   
        },[watchList])
      
        const removeLocalItem =()=>{
          const val = JSON.parse(localStorage.getItem('watchlist'));
           val.pop();
          return localStorage.setItem('watchlist', JSON.stringify(val));
        }
      
        const addStock=(stock)=>{
            if(watchList.indexOf(stock) === -1 ){
                setWatchlist([...watchList, stock])
            }
        }
        const deleteStock=(stock)=>{
                setWatchlist(watchList.filter(del=> del !== stock))
        }
    return <WatchListContext.Provider value={{ watchList, addStock, deleteStock, removeLocalItem }}>
        {props.children}
    </WatchListContext.Provider>
}