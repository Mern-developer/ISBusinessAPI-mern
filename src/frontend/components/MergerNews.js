import { useEffect, useState } from "react"
import finhub from "../apis/finhub"
import { localDateTimeZone, textTurncate } from "../utils/Utils";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
export const MergerNews = ({ newsCategory }) => {
    const [merger, setMerger] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage,setCurrentPage]=useState(1)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await finhub.get('/news', {
                    params: {
                        category: newsCategory?.toLowerCase()
                    }
                })
                if (response) 
                setMerger(response)
            } catch (error) {
                console.log("Error:", error)
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    }, [newsCategory])



   const itemperPage = 12;
   const pageCount = Math.ceil(merger?.data?.length / itemperPage);
   const page = Array.from({length: pageCount},(_,i)=>i+1);
   const start = (currentPage - 1) * itemperPage;
   const end = start + itemperPage;
   const currentItems = merger?.data?.slice(start, end);
    return (
        <div>
            <h1 className="text-center my-2">{newsCategory} News</h1>
            <div className="container h-100 mt-4">
                {loading ? (
                   <div className="row g-4"> {
                        [1,2,3,4,5,6,7,8,9].map((_, id) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card" key={id} aria-hidden="true">
                                    <div className="placeholder-glow" style={{ height: '180px',background: '#808080' }}>
                                            <span className="placeholder col-12 h-100"></span>

                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </h5>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                        </p>
                                        <Link to="#" class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }

                </div>) :
                    <div className="row g-4">
                        {currentItems?.map((item, id) => {
                            return (
                                <div key={id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="card h-100" >
                                        <div className="" style={{ height: '180px' }}>
                                            <img src={item?.image} className="card-img-top w-100 h-100" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-truncate" title={item?.headline}>{item?.headline}</h5>
                                            <p className="card-text text-justify" style={{ height: '80px' }}>{textTurncate(item?.summary)}</p>
                                            <p className="card-title fw-bold">Publish <span style={{ fontSize: '12px', color: '#808080' }}>{localDateTimeZone(item?.datetime)}</span></p>

                                            {/* <Link to={item?.url} className="btn btn-primary" target="_blank">Visit</Link> */}
                                            <a href={item?.url} rel="noreferrer" className="btn btn-primary" target="_blank">Visit</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
            </div>
            <div className="mt-4">
                <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageCount={pageCount}
                page={page}
                    
                />        
                
            </div>
        </div>)
}