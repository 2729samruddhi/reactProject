import React from 'react';

const Navbar = ({ toggleSidebar, userName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <button 
          className="navbar-toggler border-0 p-0 me-3" 
          type="button" 
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      

        <div className="d-flex">
          <span className="navbar-brand ms-2">
            {window.innerWidth > 768 ? 'जिल्हाधिकारी कार्यालय, कोल्हापूर' : 'Kolhapur'}
          </span>
        </div>

        <button 
          className="d-none d-lg-block border-0 bg-transparent" 
          type="button" 
          onClick={toggleSidebar}
        >
          <i className="bi bi-list text-white fs-4"></i>
        </button>

        <div className="ms-auto d-flex align-items-center">
          <div className="dropdown">
            <button className="btn btn-info dropdown-toggle d-flex align-items-center" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/api/placeholder/32/32" className="rounded-circle me-2" alt="User" />
              <span className="d-none d-md-inline">{userName}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;