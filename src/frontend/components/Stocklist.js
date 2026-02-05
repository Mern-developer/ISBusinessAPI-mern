import { useContext, useEffect, useState } from 'react'
import finhub from '../apis/finhub'
import { WatchListContext } from '../context/W.Lcontext';
import { useNavigate } from 'react-router-dom'
import { Spiner } from './Spinerr';

export const Stocklist = () => {
    const { watchList, deleteStock } = useContext(WatchListContext)
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const changeColor = (color) => {
        return color > 0 ? "success" : "danger"
    }

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            //const responses =[];
            try {
                const response = await Promise.all(watchList.map((stocks) => {
                    return finhub.get("/quote", {
                        params: {
                            symbol: stocks
                        }
                    })
                })
                )
                const data = response.map((Resdata) => {
                    return {
                        data: Resdata.data,
                        params: Resdata.config.params.symbol,
                        status: Resdata.headers.status
                    }
                });
                // console.log(data,"Farhan");
                if (response) setLoading(false)
                function extract() {
                    const subsError = data.map(se => se.params);
                    let result = subsError[subsError.length - 1] === '^IXIC';
                    if (result === true) {
                        window.location.replace('/error')
                    }
                }
                extract();
                if (isMounted) {
                    setStock(data);
                    // console.log("mount")
                }
            } catch (err) {
                if (err.message === "Request failed with status code 403") {
                    console.log(err)
                    navigate('/error')
                }
                else {
                    console.log(err)
                }
            }
        }
        fetchData();
        return () => (isMounted = false)
    }, [watchList, navigate])

    const handleStocldetail = (symbol) => {
        navigate(`/stock-detail/${symbol}`)
    }
    return (
        <div>
            <h4 className="text-center">List of Stocks</h4>
            <div className='table-responsive'>
                <table className='table table-striped hover mt-5 fixed-table'>
                    <thead style={{ color: "rgb(79,89,102)" }}>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col" title='Name'>Name</th>
                            <th scope="col" title='Last'>Last</th>
                            <th scope="col" title='Chg'>Chg</th>
                            <th scope="col" title='Chg%'>Chg%</th>
                            <th scope="col" title='High'>High</th>
                            <th scope="col" title='Low'>Low</th>
                            <th scope="col" title='Open'>Open</th>
                            <th scope="col" title='Pclose'>Pclose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ?
                            <tr>
                                <td colSpan="12" className='text-center py-5'>
                                    <Spiner />
                                </td>
                            </tr>

                            : stock.map((st, i) => {
                                return (
                                    <tr onClick={() => handleStocldetail(st.params)} className='table-row delete-row showHand' key={st.params}>
                                        <td>{i + 1}</td>
                                        <td>{st.params}</td>
                                        <td>{st.data.c.toFixed(2)}</td>
                                        <td className={`text-${changeColor(st.data.d)}`}>{st.data.d.toFixed(2)}
                                            {st.data.d.toFixed(2) > 0 ? (<i className="fa-solid fa-caret-up"></i>) : (<i className="fa-solid fa-caret-down"></i>)}</td>
                                        <td className={`text-${changeColor(st.data.dp)}`}>{st.data.dp.toFixed(2)}
                                            {st.data.dp.toFixed(2) > 0 ? (<i className="fa-solid fa-caret-up inline-block"></i>) : (<i className="fa-solid fa-caret-down"></i>)}</td>
                                        <td>{st.data.h.toFixed(2)}</td>
                                        <td>{st.data.l.toFixed(2)}</td>
                                        <td>{st.data.o.toFixed(2)}</td>
                                        <td>{st.data.pc.toFixed(2)}
                                            <button className="btn btn-danget ml-3 display-inline-block delete-icon btn-sm border" onClick={(e) => {
                                                e.stopPropagation()
                                                deleteStock(st.params)
                                            }}>Remove</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>



        </div>




    )
}