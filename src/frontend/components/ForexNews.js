import { Pagination } from "./Pagination"
import { useEffect, useState } from "react";
import finhub from "../apis/finhub";
import { localDateTimeZone, textTurncate } from "../utils/Utils";
import { Link } from "react-router-dom";

export const ForexNews = ({ newsCategory }) => {
    const [merger, setMerger] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await finhub.get('/news', {
                    params: {
                        category: newsCategory?.toLowerCase()
                    }
                })

                
                setMerger(response?.data)
            } catch (error) {
                console.log("Error:", error)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [newsCategory])
    const itemsPerPage = 12;
    const pageCount = Math.ceil(merger?.length / itemsPerPage);
    const page = Array.from({ length: pageCount }, (_, i) => i + 1);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsTorender = merger?.slice(start, end);

    return (
        <>
            <div className="border">
                <h1 className="text-center">{newsCategory} News</h1>
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
                            {itemsTorender?.map((item, id) => {
                                return (
                                    <div key={id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                        <div className="card h-100" >
                                            <div className="" style={{ height: '180px' }}>
                                                <img src={item?.image} className="card-img-top w-100 h-100" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-truncate" title={item?.headline}>{item?.headline}</h5>
                                                {/* <p className="card-text text-justify" style={{ height: '80px' }}>{textTurncate(item?.summary)}</p>
                                                       <p className="card-text text-justify" style={{ height: '80px' }}>
                                                        
                                                        </p> */}
                                                <div className="card-text text-justify" style={{ height: '80px' }}
                                                    dangerouslySetInnerHTML={{ __html: textTurncate(item?.summary) }} />
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
                        setCurrentPage={setcurrentPage}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        page={page}
                    />

                </div>
            </div>
        </>
    )
}