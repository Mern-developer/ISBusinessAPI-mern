
export const Pagination = ({pageCount,page,currentPage,setCurrentPage}) => {

       return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item  ${currentPage === 1 && "disabled"}`} style={{cursor: currentPage === 1 ? 'not-allowed' :'pointer'}}>
                 <div className="page-link" onClick={()=>setCurrentPage((p)=> p - 1)}> Previous </div>
                </li>
                {/* {page?.map((id)=>{
                    return(
                        <li key={id} className="page-item">
                            <button role="button" className={`page-link ${id === currentPage && 'active'}`} onClick={()=>setCurrentPage(id)}>
                            {id}
                            </button>
                            
                            </li>             
                    )
                })}  */}

                    <li className="page-item d-flex justify-content-center align-items-center mx-3 fs-6 fw-medium fs-sm-5">
                     {currentPage}/{page?.length} 
                    </li> 

                <li  className={`page-item  ${currentPage === 9 && "disabled"}`} 
                onClick={()=>
                {
                    if(currentPage < pageCount){
                        setCurrentPage((p)=> p + 1)
                    }
                }
                }
                    style={{cursor: currentPage === pageCount ? 'not-allowed' :'pointer'}}>
                    <div className="page-link">Next</div>
                </li>
            </ul>
        </nav>
    )
}