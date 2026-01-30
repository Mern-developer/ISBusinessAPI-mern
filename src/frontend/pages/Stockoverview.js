import { AutoComplete } from "../components/AutoComplete"
import { Stocklist } from "../components/Stocklist"

export const Stockoverview=()=>{
    return(
<div>
<h6 className="mt-3 text-center">IS.Business provide stocks data and business News from world wide</h6>
<AutoComplete/>
<Stocklist/>
</div>
    )
}