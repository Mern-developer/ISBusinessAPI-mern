import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { WatchListContext } from "../context/W.Lcontext"

export const Error =()=>{
 const navigate = useNavigate()
    const { removeLocalItem } = useContext(WatchListContext)
useEffect(()=>{
    
// window.location.replace('/')
},[])
    return (
        <div className="container-md w-50 mt-5 p-5 border">
        <div >
                <p>"The Stock you are searching is currently not available." </p>
        </div>
        <div>
          <a onClick={() =>removeLocalItem()} href="/" className="btn btn-primary "> Go back</a>
        </div>
    </div>
    )
}