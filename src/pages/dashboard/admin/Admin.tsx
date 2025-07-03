import React from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

const Admin = () => {
  const summaryData = [
    { label: 'Total Tasks', value: 48, icon: 'pi pi-list' },
    { label: 'Leaves Taken', value: 8, icon: 'pi pi-calendar-minus' },
    { label: 'Attendance', value: '92%', icon: 'pi pi-check-circle' },
    { label: 'Pending Reviews', value: 5, icon: 'pi pi-comment' },
  ];

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Hours Worked',
        backgroundColor: '#3B82F6',
        data: [8, 7.5, 9, 6.5, 8],
      },
    ],
  };

  const pieData = {
    labels: ['Completed', 'Pending', 'In Progress'],
    datasets: [
      {
        data: [30, 10, 8],
        backgroundColor: ['#22C55E', '#F59E0B', '#3B82F6'],
      },
    ],
  };

  return (
    <div className="p-5 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Employee Dashboard</h2>

      {/* Data Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {summaryData.map((item, index) => (
          <Card key={index} className="text-center shadow-md">
            <div className="flex flex-col items-center gap-2">
              <i className={`${item.icon} text-3xl text-blue-600`} />
              <h3 className="text-xl font-bold">{item.value}</h3>
              <span className="text-gray-500">{item.label}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h4 className="mb-3 font-medium">Work Hours This Week</h4>
          <Chart type="bar" data={barData} height="300px" />
        </Card>

        <Card>
          <h4 className="mb-3 font-medium">Task Status</h4>
          <Chart type="pie" data={pieData} height="300px" />
        </Card>
      </div>
    </div>
  ) 
}

export default Admin
