export const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <h5>All Rights reserved copyRight &copy; {getYear}</h5>
            </div>
        </nav>

    )
}