import React from 'react';

const Sidebar = ({ isOpen }) => {
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  
  return (
    <div className={sidebarClass}>
      <div className="sidebar-icon-wrapper">
        <div className="sidebar-icon">
          <img src="/api/placeholder/48/48" alt="Logo" className="rounded-circle border border-2 border-light" />
        </div>
      </div>
      
      {isOpen && (
        <div className="p-3 border-bottom">
          <div className="d-flex align-items-center">
            <span className="fw-bold">Sanjay T Teli</span>
          </div>
          <div className="small">
            <span className="online-badge"></span>
            <span>Online</span>
          </div>
        </div>
      )}
      
      <ul className="nav flex-column sidebar-menu">
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center active">
            <i className="bi bi-house-door me-2"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-person me-2"></i>
            <span>User Master</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-cloud-rain me-2"></i>
            <span>पावसाचा तपशिल</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-file-text me-2"></i>
            <span>प्रपत्र</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-file-plus me-2"></i>
            <span>प्रपत्र अतिरिक्त माहिती</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-cloud-drizzle me-2"></i>
            <span>अवकाळी पावसाचा तपशिल</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <i className="bi bi-gear me-2"></i>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;