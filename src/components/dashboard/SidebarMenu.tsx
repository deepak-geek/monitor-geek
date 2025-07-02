import React from 'react';
import { Menu } from 'primereact/menu';

interface SidebarMenuProps {
    visible: boolean;
    setVisible: (v: boolean) => void;
}

export default function SidebarMenu({ visible }: SidebarMenuProps) {
    const items = [
        { label: 'Home', icon: 'pi pi-home', url:"/dashboard"},
        { label: 'Engage', icon: 'pi pi-bolt' },
        { label: 'To Do', icon: 'pi pi-calendar' },
        { label: 'Salary', icon: 'pi pi-wallet' },
        { label: 'Leave', icon: 'pi pi-briefcase' },
        { label: 'Attendance', icon: 'pi pi-clock' },
        { label: 'Document Center', icon: 'pi pi-file' },
        { label: 'People', icon: 'pi pi-users' },
        { label: 'Helpdesk', icon: 'pi pi-question-circle' },
        { label: 'Workflow Delegates', icon: 'pi pi-sitemap' },
    ];

    return (
        <>
            {visible && <div className="p-sidebar-sm">
                <div className="text-center mb-3">
                    <h3>GeekTech</h3>
                </div>
                <Menu model={items} />
            </div>}
        </>
    );
}
