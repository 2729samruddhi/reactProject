import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// Import Footer if you have a Footer component
// import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">My Website</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-4">
        <Outlet />
      </main>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>My Website</h5>
              <p>© 2025 All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                <Link className="text-white text-decoration-none me-3" to="/">Home</Link>
                <Link className="text-white text-decoration-none me-3" to="/about">About</Link>
                <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;