import React, { useState } from 'react';

import './style.css';
import { Outlet, useNavigate } from 'react-router-dom'
import SidebarMenu from '../../components/dashboard/SidebarMenu';
import Topbar from '../../components/dashboard/Topbar';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const navigate= useNavigate();
  const logout=()=>{
    navigate("/authentication/login")
  }
  return (
    <div className="dashboard-layout">
      <SidebarMenu visible={sidebarVisible} setVisible={setSidebarVisible} />
      <div className="main-content">
        <Topbar isAdmin={false} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} onLogout={logout} />
        <Outlet />
        
      </div>
    </div>
  )
}

export default Dashboard
