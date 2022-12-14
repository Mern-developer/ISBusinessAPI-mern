import { AutoComplete } from "../components/AutoComplete"
import { Stocklist } from "../components/Stocklist"

export const Stockoverview=()=>{
    return(
<div>
<h6 className="mt-3 text-center">IS.Busines provide stocks data with graph from world wide<br/>
    its provivde one year data</h6>
<AutoComplete/>
<Stocklist/>
</div>
    )
}