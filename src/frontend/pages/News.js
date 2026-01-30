import { useParams } from "react-router-dom"
import { MergerNews } from "../components/MergerNews"
import { ForexNews } from "../components/ForexNews"

const componentMap={
  forex: ForexNews,
  merger: MergerNews
}


export const News=()=>{
    const {category}=useParams()
    console.log(category,"params")
   const Component=componentMap[category?.toLowerCase()]
    return Component ? <Component newsCategory={category} /> : null

}