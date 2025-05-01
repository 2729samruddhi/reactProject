import React from 'react';

const ReportCard = ({ title, children }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-light d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{title}</h5>
        <div>
          <button className="btn btn-sm btn-link text-dark">
            <i className="bi bi-dash"></i>
          </button>
          <button className="btn btn-sm btn-link text-dark">
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default ReportCard;