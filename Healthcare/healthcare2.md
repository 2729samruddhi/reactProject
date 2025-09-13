// ============================================================================
// COMPLETE REACT HEALTHCARE DASHBOARD PROJECT STRUCTURE
// ============================================================================

// 1. package.json
{
  "name": "healthcare-dashboard",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "lucide-react": "^0.263.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

// ============================================================================
// 2. public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Healthcare Dashboard - Modern medical management interface" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Healthcare Dashboard</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

// ============================================================================
// 3. src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ============================================================================
// 4. src/index.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8fafc;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

// ============================================================================
// 5. src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;

// ============================================================================
// 6. src/App.css
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f5f9;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .app-body {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .app {
    height: auto;
    min-height: 100vh;
  }
  
  .app-body {
    flex-direction: column;
  }
}

// ============================================================================
// 7. src/data/mockData.js
export const navigationItems = [
  { icon: 'BarChart3', label: 'Dashboard', active: true },
  { icon: 'Activity', label: 'History' },
  { icon: 'Calendar', label: 'Calendar' },
  { icon: 'Calendar', label: 'Appointments' },
  { icon: 'BarChart3', label: 'Statistics' },
  { icon: 'Activity', label: 'Tests' },
  { icon: 'MessageCircle', label: 'Chat' },
  { icon: 'HelpCircle', label: 'Support' },
  { icon: 'Settings', label: 'Setting' }
];

export const healthStatusData = [
  { 
    type: 'Lungs', 
    status: 'critical', 
    date: '26 Oct 2021', 
    color: '#ef4444',
    progress: 85,
    icon: '🫁'
  },
  { 
    type: 'Teeth', 
    status: 'good', 
    date: '26 Oct 2021', 
    color: '#10b981',
    progress: 30,
    icon: '🦷'
  },
  { 
    type: 'Bone', 
    status: 'warning', 
    date: '26 Oct 2021', 
    color: '#f59e0b',
    progress: 60,
    icon: '🦴'
  }
];

export const upcomingAppointments = {
  thursday: [
    { 
      title: 'Health checkup complete', 
      time: '11:00 AM', 
      icon: '🏥', 
      bgColor: '#e0e7ff',
      textColor: '#3730a3'
    },
    { 
      title: 'Ophthalmologist', 
      time: '14:00 PM', 
      icon: '👁️', 
      bgColor: '#fef3c7',
      textColor: '#92400e'
    }
  ],
  saturday: [
    { 
      title: 'Cardiologist', 
      time: '12:00 AM', 
      icon: '❤️', 
      bgColor: '#fee2e2',
      textColor: '#991b1b'
    },
    { 
      title: 'Neurologist', 
      time: '16:00 PM', 
      icon: '🧠', 
      bgColor: '#e0e7ff',
      textColor: '#3730a3'
    }
  ]
};

export const calendarData = [
  { day: 25, appointments: ['10:00'], isToday: false },
  { day: 26, appointments: ['09:00', '20:00'], isToday: true },
  { day: 27, appointments: ['13:00'], isToday: false },
  { day: 28, appointments: ['11:00', '10:00'], isToday: false },
  { day: 29, appointments: ['14:00', '15:00'], isToday: false },
  { day: 30, appointments: ['09:00', '10:00'], isToday: false },
  { day: 31, appointments: ['11:00'], isToday: false }
];

export const activityData = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 80 },
  { day: 'Thu', value: 35 },
  { day: 'Fri', value: 90 },
  { day: 'Sat', value: 55 },
  { day: 'Sun', value: 25 }
];

// ============================================================================
// 8. src/components/Header.js
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <Bell className="notification-icon" />
        <div className="user-profile">
          <div className="user-avatar">
            <span>JD</span>
          </div>
          <span className="user-name">John Doe</span>
        </div>
        <button className="add-button">
          <Plus className="add-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;

// ============================================================================
// 9. src/components/Header.css
.header {
  background-color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: #06b6d4;
  margin: 0;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #9ca3af;
}

.search-input {
  padding: 8px 16px 8px 40px;
  background-color: #f9fafb;
  border: none;
  border-radius: 8px;
  outline: none;
  width: 256px;
  font-size: 14px;
}

.search-input:focus {
  background-color: #f3f4f6;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
  cursor: pointer;
}

.notification-icon:hover {
  color: #374151;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background-color: #fb923c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.add-button {
  width: 32px;
  height: 32px;
  background-color: #06b6d4;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #0891b2;
}

.add-icon {
  width: 16px;
  height: 16px;
  color: white;
}

@media (max-width: 768px) {
  .header {
    padding: 0 16px;
  }
  
  .header-left {
    gap: 16px;
  }
  
  .search-input {
    width: 200px;
  }
  
  .user-name {
    display: none;
  }
}

// ============================================================================
// 10. src/components/Sidebar.js
import React from 'react';
import { 
  BarChart3, 
  Activity, 
  Calendar, 
  MessageCircle, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { navigationItems } from '../data/mockData';
import './Sidebar.css';

const iconMap = {
  BarChart3,
  Activity,
  Calendar,
  MessageCircle,
  Settings,
  HelpCircle
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {navigationItems.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={index}
                className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
              >
                {IconComponent && <IconComponent className="nav-icon" />}
                <span className="nav-label">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

// ============================================================================
// 11. src/components/Sidebar.css
.sidebar {
  width: 256px;
  background-color: #f8fafc;
  height: 100%;
  padding: 24px;
  border-right: 1px solid #e2e8f0;
}

.sidebar-content {
  height: 100%;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.nav-item:hover {
  background-color: white;
  color: #374151;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.nav-item-active {
  background-color: white;
  color: #374151;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.nav-icon {
  width: 16px;
  height: 16px;
}

.nav-label {
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    height: auto;
    padding: 16px;
  }
  
  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .nav-item {
    flex: 1;
    min-width: 120px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .nav-label {
    display: none;
  }
  
  .nav-item {
    min-width: auto;
    padding: 8px;
  }
}

// ============================================================================
// Continue with remaining components in next response...
// This is Part 1 of the complete project structure



// ============================================================================
// PART 2: REMAINING COMPONENTS
// ============================================================================

// 12. src/components/DashboardMainContent.js
import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        {/* Left Column - Anatomy and Health Status */}
        <div className="dashboard-column-left">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        
        {/* Middle Column - Calendar */}
        <div className="dashboard-column-middle">
          <CalendarView />
        </div>
        
        {/* Right Column - Schedule and Activity */}
        <div className="dashboard-column-right">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;

// ============================================================================
// 13. src/components/DashboardMainContent.css
.dashboard-main {
  flex: 1;
  padding: 24px;
  background-color: #f8fafc;
  overflow-y: auto;
  height: 100%;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-column-left,
.dashboard-column-middle,
.dashboard-column-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .dashboard-column-right {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: 24px;
  }
  
  .dashboard-column-right > * {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .dashboard-main {
    padding: 16px;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .dashboard-column-right {
    flex-direction: column;
  }
}

// ============================================================================
// 14. src/components/AnatomySection.js
import React from 'react';
import { Heart } from 'lucide-react';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-header">
        <h2 className="anatomy-title">Dashboard</h2>
        <span className="anatomy-subtitle">This Week</span>
      </div>
      
      <div className="anatomy-body">
        <div className="human-body-container">
          <svg viewBox="0 0 200 400" className="human-body-svg">
            {/* Head */}
            <ellipse cx="100" cy="30" rx="25" ry="30" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            
            {/* Torso */}
            <rect x="75" y="60" width="50" height="120" rx="25" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            
            {/* Arms */}
            <ellipse cx="55" cy="90" rx="8" ry="35" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            <ellipse cx="145" cy="90" rx="8" ry="35" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            
            {/* Legs */}
            <rect x="85" y="180" width="12" height="80" rx="6" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            <rect x="103" y="180" width="12" height="80" rx="6" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            
            {/* Feet */}
            <ellipse cx="91" cy="270" rx="8" ry="12" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
            <ellipse cx="109" cy="270" rx="8" ry="12" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
          </svg>
          
          {/* Health Indicators */}
          <div className="health-indicator heart-indicator">
            <Heart className="indicator-icon" />
            <span>Healthy Heart</span>
          </div>
          
          <div className="health-indicator leg-indicator">
            <span>Healthy Leg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;

// ============================================================================
// 15. src/components/AnatomySection.css
.anatomy-section {
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.anatomy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.anatomy-title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.anatomy-subtitle {
  font-size: 14px;
  color: #6b7280;
}

.anatomy-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.human-body-container {
  position: relative;
  width: 200px;
  height: 300px;
}

.human-body-svg {
  width: 100%;
  height: 100%;
}

.health-indicator {
  position: absolute;
  background-color: #3b82f6;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.heart-indicator {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.leg-indicator {
  bottom: 15%;
  left: 20%;
  background-color: #06b6d4;
}

.indicator-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .anatomy-section {
    padding: 16px;
  }
  
  .anatomy-title {
    font-size: 20px;
  }
  
  .human-body-container {
    width: 150px;
    height: 250px;
  }
}

// ============================================================================
// 16. src/components/HealthStatusCards.js
import React from 'react';
import { Activity } from 'lucide-react';
import { healthStatusData } from '../data/mockData';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      {healthStatusData.map((item, index) => (
        <div key={index} className="health-status-card">
          <div className="status-header">
            <div className="status-icon-container">
              {item.type === 'Lungs' && <Activity className="status-icon lungs-icon" />}
              {item.type === 'Teeth' && <span className="status-emoji">🦷</span>}
              {item.type === 'Bone' && <span className="status-emoji">🦴</span>}
            </div>
            <span className="status-title">{item.type}</span>
          </div>
          <p className="status-date">Date: {item.date}</p>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ 
                backgroundColor: item.color, 
                width: `${item.progress}%` 
              }}
            />
          </div>
        </div>
      ))}
      
      <button className="details-button">
        Details →
      </button>
    </div>
  );
};

export default HealthStatusCards;

// ============================================================================
// 17. src/components/HealthStatusCards.css
.health-status-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.health-status-card {
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.status-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.status-icon-container {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-icon {
  width: 16px;
  height: 16px;
}

.lungs-icon {
  color: #ef4444;
  background-color: #fee2e2;
  padding: 8px;
  border-radius: 8px;
}

.status-emoji {
  font-size: 16px;
}

.status-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 16px;
}

.status-date {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 12px;
  margin: 0 0 12px 0;
}

.progress-container {
  width: 100%;
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.details-button {
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  color: #06b6d4;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.details-button:hover {
  background-color: #f8fafc;
}

// ============================================================================
// 18. src/components/CalendarView.js
import React from 'react';
import { Calendar } from 'lucide-react';
import { calendarData } from '../data/mockData';
import './CalendarView.css';

const CalendarView = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3 className="calendar-title">October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-button">←</button>
          <button className="nav-button">→</button>
        </div>
      </div>
      
      <div className="calendar-weekdays">
        {weekDays.map(day => (
          <div key={day} className="weekday-header">{day}</div>
        ))}
      </div>
      
      <div className="calendar-days">
        {calendarData.map(({ day, appointments, isToday }) => (
          <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
            <div className="day-number">{day}</div>
            <div className="day-appointments">
              {appointments.map((time, index) => (
                <div key={index} className="appointment-time">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        <div className="appointment-card dentist-card">
          <div className="card-header">
            <Calendar className="card-icon" />
            <span className="card-title">Dentist</span>
          </div>
          <p className="card-time">09:00-11:00</p>
          <p className="card-doctor">Dr. Cameron Williamson</p>