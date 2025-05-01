import React from 'react';
import ReportCard from './ReportCard';
import GraphCard from './GraphCard';

const Dashboard = () => {
  // Updated rainfall data to match the image
  const rainfallData = [
    { name: '1', value: 0 },
    { name: '2', value: 0 },
    { name: '3', value: 0 },
    { name: '4', value: 0 },
    { name: '5', value: 0 },
    { name: '6', value: 0 },
    { name: '7', value: 0 },
    { name: '8', value: 0 },
    { name: '9', value: 0 },
    { name: '10', value: 0 }
  ];

  // Updated annual data to match the chart in the image
  const annualData = [
    { name: '1', value: 500 },
    { name: '2', value: 500 },
    { name: '3', value: 1500 },
    { name: '4', value: 1800 },
    { name: '5', value: 3000 },
    { name: '6', value: 5500 },
    { name: '7', value: 1500 },
    { name: '8', value: 1300 },
    { name: '9', value: 1500 },
    { name: '10', value: 1800 },
    { name: '11', value: 1900 },
    { name: '12', value: 2500 }
  ];

  const renderReportButtons = () => {
    const buttons = [
      { title: 'दैनिक पावसाचा अहवाल', className: 'btn-success' },
      { title: 'प्रपत्र अहवाल', className: 'btn-info' },
      { title: 'प्रपत्र अतिरिक्त माहिती', className: 'btn-info' },
      { title: 'अवकाळी अहवाल', className: 'btn-warning' },
      { title: 'अतिवृष्टी', className: 'btn-danger' },
      { title: 'उपमुक्त पावसाचा अहवाल', className: 'btn-primary' },
      { title: 'मासिक पावसाचा अहवाल', className: 'btn-danger' },
      { title: 'तालुका प्रपत्र तपशिल', className: 'btn-dark' },
      { title: 'पावसाची माहिती SMS करणे', className: 'btn-success' },
      { title: 'पावसाची माहिती मेल करणे', className: 'btn-info' },
      { title: 'Human & Animal Lives Report', className: 'btn-warning' },
      { title: 'Total Human & Animal Lives', className: 'btn-danger' }
    ];

    return (
      <div className="d-flex flex-wrap gap-2">
        {buttons.map((button, index) => (
          <button key={index} className={`btn ${button.className} mb-2 me-2`}>
            {button.title}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid p-3">
      {/* Breadcrumb */}
      <div className="d-flex mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#"><i className="bi bi-house-door"></i> Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Admin</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h4 className="mb-1">जिल्हाधिकारी कार्यालय, कोल्हापूर <small className="text-muted">जिल्हा आपत्ती व्यवस्थापन प्राधिकरण</small></h4>
          <hr className="mt-2" style={{ height: '3px', backgroundColor: '#17a2b8', opacity: '1' }} />
        </div>
      </div>

      {/* Report Cards */}
      <div className="row">
        <div className="col-lg-6">
          <ReportCard title="अहवाल">
            {renderReportButtons()}
          </ReportCard>
        </div>
        <div className="col-lg-6">
          <ReportCard title="आजचा पावसाचा तपशिल">
            <p>No rainfall data for today</p>
          </ReportCard>
        </div>
      </div>

      {/* Graph Cards */}
      <div className="row">
        <div className="col-lg-6">
          <GraphCard title="आजचा पाऊस" data={rainfallData} />
        </div>
        <div className="col-lg-6">
          <GraphCard title="वार्षिक सरासरी व एकूण पावसाचा तुलनात्मक तपशिल" data={annualData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;