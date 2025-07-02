import React from 'react';
import { Card } from 'primereact/card';

export default function DashboardWidgets() {
  return (
    <div className="dashboard-widgets">
      <Card title="Review" className="widget">
        <p>Hurrah! You've nothing to review.</p>
      </Card>
      <Card title="Shift Info" className="widget">
        <p>2 July 2025, Wednesday | GENERAL SHIFT</p>
        <p>Time: 19:25:58</p>
      </Card>
      <Card title="Upcoming Holidays" className="widget">
        <p>No holidays to show.</p>
      </Card>
    </div>
  );
}
