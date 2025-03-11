import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Title from '../../components/common/Title';
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
    FiLogOut,
    FiFolder,
    FiClipboard,
    FiUsers,
    FiCheckCircle,
    FiEye,
    FiBarChart,
    FiList,
    FiCalendar
} from 'react-icons/fi';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const commonLinks = [
        { to: '/', label: 'Home', icon: <FiHome size={20} /> },
    ];

    const roleLinks = {
        student: [
            { to: '/dashboard/student', label: 'Dashboard', icon: <FiUser size={20} /> },
            { to: '/projects/propose', label: 'Propose Project', icon: <FiBookOpen size={20} /> },
            { to: '/projects/approved', label: 'Current Projects', icon: <FiBriefcase size={20} /> },
            { to: '/notifications', label: 'Notifications', icon: <FiBell size={20} /> },
            // { to: '/portfolio', label: 'Portfolio', icon: <FiUser size={20} /> },
            { to: '/myprojects', label: 'My Projects', icon: <FiFolder size={20} /> },

            // { to: '/task-assignments', label: 'Task Assignments', icon: <FiClipboard size={20} /> },
            // { to: '/team-formation', label: 'Team Formation', icon: <FiUsers size={20} /> },
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
            { to: '/professor/approveProjects', label: 'Approve Projects', icon: <FiCheckCircle size={20} /> },
            { to: '/professor/project-reviews', label: 'Project Reviews', icon: <FiEye size={20} /> },
        ],
        mentor: [
            { to: '/dashboard/mentor', label: 'Mentor Dashboard', icon: <FiUser size={20} /> },
            { to: '/project-guidance', label: 'Project Guidance', icon: <FiBookOpen size={20} /> },
            { to: '/task-monitoring', label: 'Task Monitoring', icon: <FiList size={20} /> },
            { to: '/weekly-review', label: 'Weekly Review', icon: <FiCalendar size={20} /> },
        ],
    };

    const getNavLinks = () => {
        if (!user) return commonLinks;
        return [...commonLinks, ...(roleLinks[user.role] || [])];
    };

    return (
        <div className={`bg-[#264653] text-white h-screen p-5 pt-8 ${isOpen ? 'w-64' : 'w-20'} duration-300 relative`}>
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar}>
                {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
            </div>

            <div className="links h-full flex flex-col justify-between">

                <ul className="mt-10 space-y-4">

                    {getNavLinks().map((link, index) => (
                        <li key={index} className="flex items-center gap-x-4 p-2 hover:bg-[#2a9d8f] rounded-md">
                            {link.icon}
                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                <Link to={link.to}>{link.label}</Link>
                            </span>
                        </li>
                    ))}
                </ul>

                <ul className="mb-1 space-y-4">
                    {user ? (
                        <li className="flex items-center gap-x-4 p-2 hover:hover:bg-[#2a9d8f] rounded-md cursor-pointer" onClick={logout}>
                            <FiLogOut size={20} />
                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
                        </li>
                    ) : (
                        <>
                            <li className="flex items-center gap-x-4 p-2 hover:hover:bg-[#2a9d8f] rounded-md">
                                <FiLogIn size={20} />
                                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                    <Link to="/login">Login</Link>
                                </span>
                            </li>
                            <li className="flex items-center gap-x-4 p-2 hover:hover:bg-[#2a9d8f] rounded-md">
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
