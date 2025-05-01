import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraphCard = ({ title, data }) => {
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
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;