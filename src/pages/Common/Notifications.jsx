import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCheckCircle, FaProjectDiagram, FaClock, FaUserFriends, FaUserTie, FaTools } from 'react-icons/fa';

const Notifications = () => {
    const notifications = [
        {
            message: 'Your AI Chatbot Development project has been approved!',
            time: '2 hours ago'
        },
        {
            message: 'New mentor assigned to your Blockchain-based Voting System project.',
            time: '1 day ago'
        },
        {
            message: 'E-commerce Platform project deadline extended by 2 weeks.',
            time: '3 days ago'
        }
    ];

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-8">
                <motion.h1
                    className="text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaBell className="text-yellow-300" /> Notifications
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">Stay updated with the latest project-related updates.</p>
                <div className="space-y-6">
                    {notifications.map((notification, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-md space-y-2">
                            <p className="text-lg text-white">{notification.message}</p>
                            <span className="text-gray-400 text-sm">{notification.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
