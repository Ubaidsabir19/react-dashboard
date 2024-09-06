
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Header from './components/header'
import SideBar from './components/SideBar'
import Profile from './pages/Players'
import { useState } from 'react'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex-col">
       <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
       <SideBar isSidebarOpen={isSidebarOpen} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/players' element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
