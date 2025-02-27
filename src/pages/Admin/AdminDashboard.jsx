import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold mb-4'>Admin Dashboard</h1>
            <ul className='space-y-4'>
                <li><Link to='/projects/3/edit'>Manage Projects</Link></li>
                <li><Link to='/deliverables'>Track Deliverables</Link></li>
                <li><Link to='/progress-tracker'>Progress Tracker</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;