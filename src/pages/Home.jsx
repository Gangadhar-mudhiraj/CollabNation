import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTasks, FaUsers, FaBell } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-8">
                <motion.h1
                    className="text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaHome className="text-yellow-300" /> CollabNation
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">
                    This web application is designed to enhance the collaboration and management of projects within an academic and professional setting.
                    It allows students to propose, manage, and track projects while enabling professors, mentors, and administrators to oversee and support them effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaProjectDiagram className="text-blue-300 text-3xl" />
                        <p className="text-white">Submit & Manage Project Proposals</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaTasks className="text-green-300 text-3xl" />
                        <p className="text-white">Track Project Progress & Assign Tasks</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaUsers className="text-purple-300 text-3xl" />
                        <p className="text-white">Collaborate with Team Members & Mentors</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaBell className="text-red-300 text-3xl" />
                        <p className="text-white">Get Notified About Project Updates</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
