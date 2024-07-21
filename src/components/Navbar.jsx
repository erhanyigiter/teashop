import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                    <a href="/" className="navbar-brand">
                        <img className="img-fluid" src="img/logo.png" alt="Logo" />
                    </a>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to= "/products" className="nav-item nav-link">Products</Link>
                            <Link to="/store" className="nav-item nav-link">Store</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="border-start ps-4 d-none d-lg-block">
                            <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
