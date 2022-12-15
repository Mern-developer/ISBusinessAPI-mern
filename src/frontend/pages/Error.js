import { useContext} from "react"
import { WatchListContext } from "../context/W.Lcontext"

export const Error =()=>{
    const { removeLocalItem } = useContext(WatchListContext)
    return (
        <div className="container-md mt-5 p-5 border">
        <div >
                <p>"The Stock you are searching is currently not available." </p>
        </div>
        <div>
          <a onClick={() =>removeLocalItem()} href="/" className="btn btn-primary "> Go back</a>
        </div>
    </div>
    )
}