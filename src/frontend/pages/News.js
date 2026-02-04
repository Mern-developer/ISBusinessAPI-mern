import { useParams } from "react-router-dom"
import { MergerNews } from "../components/MergerNews"
import { ForexNews } from "../components/ForexNews"
import { General } from "../components/General"
import { Crypto } from "../components/Crypto"

const componentMap = {
  forex: ForexNews,
  merger: MergerNews,
  general: General,
  crypto: Crypto
}


export const News = () => {
  const { category } = useParams()
  const Component = componentMap[category?.toLowerCase()]
  return Component ? <Component newsCategory={category} /> : null

}