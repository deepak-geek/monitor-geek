import React, { useState } from 'react';

import './style.css';
import { Outlet } from 'react-router-dom'
import SidebarMenu from '../../components/dashboard/SidebarMenu';
import Topbar from '../../components/dashboard/Topbar';
import DashboardWidgets from '../../components/dashboard/DashboardWidgets';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="dashboard-layout">
      <SidebarMenu visible={sidebarVisible} setVisible={setSidebarVisible} />
      <div className="main-content">
        <Topbar toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
        <Outlet />
        <DashboardWidgets />
      </div>
    </div>
  )
}

export default Dashboard
