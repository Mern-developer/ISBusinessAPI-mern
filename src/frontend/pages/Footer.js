export const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <h5 className="fs-lg-4 fs-6">Copyright &copy; {getYear}. All rights reserved. </h5>
            </div>
        </nav>

    )
}