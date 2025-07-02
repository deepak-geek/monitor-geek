import React from 'react';
import { Button } from 'primereact/button';

interface TopbarProps {
  toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
  return (
    <div className="topbar">
      <Button icon="pi pi-bars" className="p-button-text" onClick={toggleSidebar} />
      <div className="topbar-right">
        <span className="user-greeting">Good Evening, Deepak</span>
        <Button icon="pi pi-bell" className="p-button-text p-ml-3" />
      </div>
    </div>
  );
}
