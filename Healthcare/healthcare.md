import React from 'react';
import { Search, Bell, Plus, Calendar, BarChart3, MessageCircle, Settings, HelpCircle, Heart, Activity, Eye } from 'lucide-react';

// Mock Data
const navigationItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Activity, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Calendar, label: 'Appointments' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: Activity, label: 'Tests' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' },
  { icon: Settings, label: 'Setting' }
];

const healthStatusData = [
  { type: 'Lungs', status: 'critical', date: '26 Oct 2021', color: '#ef4444' },
  { type: 'Teeth', status: 'good', date: '26 Oct 2021', color: '#10b981' },
  { type: 'Bone', status: 'warning', date: '26 Oct 2021', color: '#f59e0b' }
];

const upcomingAppointments = {
  thursday: [
    { title: 'Health checkup complete', time: '11:00 AM', icon: '🏥', color: '#e0e7ff' },
    { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️', color: '#fef3c7' }
  ],
  saturday: [
    { title: 'Cardiologist', time: '12:00 AM', icon: '❤️', color: '#fee2e2' },
    { title: 'Neurologist', time: '16:00 PM', icon: '🧠', color: '#e0e7ff' }
  ]
};

const calendarData = [
  { day: 25, appointments: ['10:00'] },
  { day: 26, appointments: ['09:00', '20:00'] },
  { day: 27, appointments: ['13:00'] },
  { day: 28, appointments: ['11:00', '10:00'] },
  { day: 29, appointments: ['14:00', '15:00'] },
  { day: 30, appointments: ['09:00', '10:00'] },
  { day: 31, appointments: ['11:00'] }
];

// Header Component
const Header = () => (
  <header className="bg-white h-16 flex items-center justify-between px-6 border-b border-gray-100">
    <div className="flex items-center gap-8">
      <h1 className="text-xl font-bold text-cyan-500">Healthcare.</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search" 
          className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none outline-none w-64"
        />
      </div>
    </div>
    
    <div className="flex items-center gap-4">
      <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
        <span className="text-sm font-medium text-gray-700">John Doe</span>
      </div>
      <button className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
        <Plus className="w-4 h-4 text-white" />
      </button>
    </div>
  </header>
);

// Sidebar Component
const Sidebar = () => (
  <aside className="w-64 bg-gray-50 h-full p-6">
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 mb-4">General</h3>
      <nav className="space-y-2">
        {navigationItems.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              item.active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  </aside>
);

// Anatomy Section Component
const AnatomySection = () => (
  <div className="bg-white rounded-2xl p-6 relative overflow-hidden">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
      <span className="text-sm text-gray-500">This Week</span>
    </div>
    
    <div className="relative flex items-center justify-center">
      {/* Human Body Silhouette */}
      <div className="relative w-48 h-80">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          {/* Body outline */}
          <path
            d="M100 20 C90 20 85 25 85 35 L85 50 C80 55 75 60 75 70 L75 100 C70 110 65 120 65 140 L65 200 C65 220 70 240 75 250 L75 300 C75 320 80 340 85 350 L85 380 C85 390 90 395 100 395 C110 395 115 390 115 380 L115 350 C120 340 125 320 125 300 L125 250 C130 240 135 220 135 200 L135 140 C135 120 130 110 125 100 L125 70 C125 60 120 55 115 50 L115 35 C115 25 110 20 100 20 Z"
            fill="#fca5a5"
            stroke="#f87171"
            strokeWidth="1"
          />
          {/* Arms */}
          <ellipse cx="60" cy="80" rx="8" ry="25" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
          <ellipse cx="140" cy="80" rx="8" ry="25" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
          {/* Legs */}
          <ellipse cx="85" cy="330" rx="8" ry="35" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
          <ellipse cx="115" cy="330" rx="8" ry="35" fill="#fca5a5" stroke="#f87171" strokeWidth="1" />
        </svg>
        
        {/* Health Indicators */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Heart className="w-3 h-3" />
            Healthy Heart
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/4 transform -translate-x-1/2">
          <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium">
            Healthy Leg
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Health Status Cards Component
const HealthStatusCards = () => (
  <div className="space-y-4">
    {healthStatusData.map((item, index) => (
      <div key={index} className="bg-white rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-2">
          {item.type === 'Lungs' && <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-red-500" />
          </div>}
          {item.type === 'Teeth' && <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-500 text-sm">🦷</span>
          </div>}
          {item.type === 'Bone' && <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-orange-500 text-sm">🦴</span>
          </div>}
          <span className="font-medium text-gray-900">{item.type}</span>
        </div>
        <p className="text-xs text-gray-500 mb-2">Date: {item.date}</p>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="h-1 rounded-full" 
            style={{ 
              backgroundColor: item.color, 
              width: item.status === 'critical' ? '85%' : item.status === 'good' ? '30%' : '60%' 
            }}
          />
        </div>
      </div>
    ))}
    
    <button className="w-full bg-white rounded-2xl p-4 text-center text-cyan-500 text-sm font-medium hover:bg-gray-50 transition-colors">
      Details →
    </button>
  </div>
);

// Calendar View Component
const CalendarView = () => (
  <div className="bg-white rounded-2xl p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">October 2021</h3>
      <div className="flex gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <span className="text-gray-600">←</span>
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <span className="text-gray-600">→</span>
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-7 gap-1 mb-4">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
        <div key={day} className="text-xs text-gray-500 text-center p-2 font-medium">{day}</div>
      ))}
    </div>
    
    <div className="grid grid-cols-7 gap-1">
      {calendarData.map(({ day, appointments }) => (
        <div key={day} className="p-2 text-center">
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          <div className="space-y-1">
            {appointments.map((time, index) => (
              <div key={index} className="text-xs bg-blue-100 text-blue-700 px-1 py-0.5 rounded">
                {time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 space-y-4">
      <div className="bg-blue-600 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">Dentist</span>
        </div>
        <p className="text-sm opacity-90">09:00-11:00</p>
        <p className="text-sm opacity-90">Dr. Cameron Williamson</p>
      </div>
      
      <div className="bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Physiotherapy Appointment</span>
        </div>
        <p className="text-sm text-gray-600">11:00-12:00</p>
        <p className="text-sm text-gray-600">Dr. Kevin Djones</p>
      </div>
    </div>
  </div>
);

// Upcoming Schedule Component
const UpcomingSchedule = () => (
  <div className="bg-white rounded-2xl p-6">
    <h3 className="text-lg font-bold text-gray-900 mb-6">The Upcoming Schedule</h3>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">On Thursday</h4>
        <div className="grid grid-cols-2 gap-4">
          {upcomingAppointments.thursday.map((appointment, index) => (
            <SimpleAppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">On Saturday</h4>
        <div className="grid grid-cols-2 gap-4">
          {upcomingAppointments.saturday.map((appointment, index) => (
            <SimpleAppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Simple Appointment Card Component
const SimpleAppointmentCard = ({ title, time, icon, color }) => (
  <div className={`p-4 rounded-xl`} style={{ backgroundColor: color }}>
    <div className="flex items-center justify-between mb-2">
      <span className="text-lg">{icon}</span>
      <Eye className="w-4 h-4 text-gray-600" />
    </div>
    <h5 className="font-medium text-gray-900 text-sm mb-1">{title}</h5>
    <p className="text-xs text-gray-600">{time}</p>
  </div>
);

// Activity Feed Component
const ActivityFeed = () => (
  <div className="bg-white rounded-2xl p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Activity</h3>
      <span className="text-sm text-gray-500">3 appointments on this week</span>
    </div>
    
    <div className="flex items-end justify-between h-32 mb-4">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
        <div key={day} className="flex flex-col items-center gap-2">
          <div 
            className="w-8 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t"
            style={{ height: `${20 + Math.random() * 80}px` }}
          />
          <span className="text-xs text-gray-500">{day}</span>
        </div>
      ))}
    </div>
  </div>
);

// Main Dashboard Content Component
const DashboardMainContent = () => (
  <main className="flex-1 p-6 bg-gray-50 overflow-auto">
    <div className="grid grid-cols-12 gap-6 h-full">
      {/* Left Column - Anatomy and Health Status */}
      <div className="col-span-4 space-y-6">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      
      {/* Middle Column - Calendar */}
      <div className="col-span-4">
        <CalendarView />
      </div>
      
      {/* Right Column - Schedule and Activity */}
      <div className="col-span-4 space-y-6">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  </main>
);

// Main App Component
const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;