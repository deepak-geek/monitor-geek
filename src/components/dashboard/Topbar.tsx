import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

interface TopbarProps {
  toggleSidebar: () => void;
  isAdmin: boolean;
  onLogout: () => void;
}

export default function Topbar({ toggleSidebar, isAdmin, onLogout }: TopbarProps) {
  const menu = useRef<Menu | null>(null);

  const menuItems = [
    { label: 'Profile', icon: 'pi pi-user', command: () => console.log('Profile clicked') },
    { label: 'Settings', icon: 'pi pi-cog', command: () => console.log('Settings clicked') },
    ...(isAdmin ? [{ label: 'Administration', icon: 'pi pi-shield', command: () => console.log('Admin clicked') }] : []),
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: onLogout },
  ];


  return (
    <div className="topbar flex justify-between items-center p-3 shadow bg-white">
      <Button icon="pi pi-bars" className="p-button-text" onClick={toggleSidebar} />

      <div className="topbar-right flex items-center gap-2">
        <Button icon="pi pi-bell" className="p-button-text" />

        {/* Profile dropdown */}
        <div className="relative">
          <Menu model={menuItems} popup ref={menu} tabIndex={1} />
          <Button
            icon="pi pi-user"
            className="p-button-text"
            onClick={(e) => menu?.current?.toggle(e)}
            aria-haspopup
            aria-controls="popup_menu"
          />
        </div>
      </div>
    </div>
  );
}
