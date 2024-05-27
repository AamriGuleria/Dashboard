import React from 'react'
import './Dashboard.css';
import Head from './Head';
import Table from './Table';
import MonthlyEmployee from './MonthlyEmployee';

const Dashboard = () => {
    const employees = [
        { rank: 1, name: 'Rakesh Sharma', des: 'UI/UX Designer', hoursWorked: '7(42)', changes: '+1.5 hrs' },
        { rank: 2, name: 'Ankita Thakur', des: 'HR Recruiter', hoursWorked: '7(41)', changes: '-1.5 hrs' },
        { rank: 3, name: 'Sarah Yadav', des: 'Product Manager', hoursWorked: '7(40)', changes: '+1.5 hrs' },
        { rank: 4, name: 'Harsha Shivhare', des: 'Designer', hoursWorked: '7(37)', changes: '-1.5 hrs' },
        { rank: 5, name: 'Vanhi Rai', des: 'Video Editor', hoursWorked: '7(37)', changes: '-1.5 hrs' },
        { rank: 6, name: 'Bhanu Sharma', des: 'Business Analyst', hoursWorked: '7(32)', changes: '-1.5 hrs' },
        { rank: 7, name: 'Sunil Yadav', des: 'Developer', hoursWorked: '7(24)', changes: '+1.5 hrs' },
        { rank: 8, name: 'Akash Roy', des: 'Business Analyst', hoursWorked: '7(21)', changes: '+1.5 hrs' },
        { rank: 9, name: 'Rohit Soni', des: 'Developer', hoursWorked: '7(20)', changes: '+1.5 hrs' },
        { rank: 10, name: 'Suraj Chauhan', des: 'Developer', hoursWorked: '7(18)', changes: '+1.5 hrs' }
      ];
      const monthly = {
        name: 'Rakesh Sharma',
        designation: 'UI/UX Designer',
        image: '../image.png' // Replace with actual image path
      };
  return (
      <div className="container">
      <Head/>
      <div className="main-content">
        <Table employees={employees} />
        <MonthlyEmployee employee={monthly} />
      </div>
    </div>
  )
}

export default Dashboard
