import { Link } from "react-router-dom"

export const ForexNews=({newsCategory})=>{
    
    console.log("Is this rendering Forex")
    return(
        <>
         <div className="border">
            <h1 className="text-center">{newsCategory} News</h1>
            <div className="container">
                <div className="row g-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, id) => {
                        return (
                            <div key={id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card" >
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}