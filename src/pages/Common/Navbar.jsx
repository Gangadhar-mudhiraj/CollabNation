import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    FiChevronRight,
    FiChevronLeft,
    FiHome,
    FiUser,
    FiSettings,
    FiBookOpen,
    FiBriefcase,
    FiBell,
    FiLogIn,
    FiLogOut
} from 'react-icons/fi';

const Navbar = () => {
    const { user, logout } = useAuth(); // Added logout from useAuth
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Common Links
    const commonLinks = [
        { to: '/', label: 'Home', icon: <FiHome size={20} /> },
    ];

    // Role-based Links
    const roleLinks = {
        student: [
            { to: '/dashboard/student', label: 'Dashboard', icon: <FiUser size={20} /> },
            { to: '/projects/propose', label: 'Propose Project', icon: <FiBookOpen size={20} /> },
            { to: '/projects/approved', label: 'Approved Projects', icon: <FiBriefcase size={20} /> },
            { to: '/notifications', label: 'Notifications', icon: <FiBell size={20} /> },
            { to: '/portfolio', label: 'Portfolio', icon: <FiUser size={20} /> },
        ],
        admin: [
            { to: '/dashboard/admin', label: 'Admin Dashboard', icon: <FiUser size={20} /> },
            { to: '/projects/:id/edit', label: 'Edit Project', icon: <FiBookOpen size={20} /> },
            { to: '/deliverables', label: 'Deliverables', icon: <FiBriefcase size={20} /> },
            { to: '/progress-tracker', label: 'Progress Tracker', icon: <FiBell size={20} /> },
        ],
        professor: [
            { to: '/dashboard/professor', label: 'Professor Dashboard', icon: <FiUser size={20} /> },
            { to: '/credits', label: 'Credit Allocation', icon: <FiBookOpen size={20} /> },
        ],
    };

    const getNavLinks = () => {
        if (!user) return commonLinks;
        return [...commonLinks, ...(roleLinks[user.role] || [])];
    };

    return (
        <div className={`bg-gray-800 text-white h-screen p-5 pt-8 ${isOpen ? 'w-64' : 'w-20'} duration-300 relative`}>
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar}>
                {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
            </div>

            <div className="links h-full flex flex-col justify-between">
                <ul className="mt-10 space-y-4">
                    {getNavLinks().map((link, index) => (
                        <li key={index} className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md">
                            {link.icon}
                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                <Link to={link.to}>{link.label}</Link>
                            </span>
                        </li>
                    ))}
                </ul>

                <ul className="mb-1  space-y-4">
                    {user ? (
                        <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md cursor-pointer" onClick={logout}>
                            <FiLogOut size={20} />
                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
                        </li>
                    ) : (
                        <>
                            <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md">
                                <FiLogIn size={20} />
                                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                    <Link to="/signin">Sign In</Link>
                                </span>
                            </li>
                            <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md">
                                <FiUser size={20} />
                                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                    <Link to="/signup">Sign Up</Link>
                                </span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
