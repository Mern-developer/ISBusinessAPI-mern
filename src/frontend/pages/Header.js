import { useLocation, useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate =useNavigate()
    const {pathname} = useLocation()
    console.log(pathname,"pathName")
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand fs-1 " href="/">IS.Business</a>
                    
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            News
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li role="button" className={`cursor-pointer dropdown-item ${pathname === "/news/Forex" && "text-bg-primary"   }`} 
                                            onClick={()=>{navigate(`/news/${'Forex'}`)}}>Forex</li>
                                            <li role="button" className={`cursor-pointer dropdown-item ${pathname === "/news/Crypto" && "text-bg-primary"   }`} 
                                            onClick={()=>{navigate(`/news/${'Crypto'}`)}}>Crypto</li>
                                            <li role="button" className={`cursor-pointer dropdown-item ${pathname === "/news/Merger" && "text-bg-primary"   }`} 
                                            onClick={()=>{navigate(`/news/${'Merger'}`)}}>Merger</li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li role="button" className={`cursor-pointer dropdown-item ${pathname === "/news/General" && "text-bg-primary"   }`} 
                                            onClick={()=>{navigate(`/news/${'General'}`)}}>General</li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>



                </div>
            </nav>
        </div>

    )
}