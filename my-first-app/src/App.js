import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const userName = "Sanjay T Teli";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} userName={userName} />
      <div className="content-container">
        <Sidebar isOpen={sidebarOpen} />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;