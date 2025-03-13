import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCheckCircle } from 'react-icons/fa';
import { useProjectContext } from '../context/ProjectContext';

const Notifications = () => {
    const { notifications, removeNotification } = useProjectContext();

    return (
        <div className="min-h-screen bg-[#2a9d8f] py-16 px-4 md:px-8 flex items-center justify-center overflow-auto">
            <div className="w-full max-w-5xl bg-[#264653] shadow-xl rounded-3xl overflow-hidden p-12 md:p-16 space-y-10">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-white flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaBell className="text-yellow-300" /> Notifications
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">
                    Stay updated with the latest project-related updates.
                </p>

                <div className="space-y-8">
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <motion.div
                                key={notification.id}
                                className="p-8 bg-gray-800 rounded-xl shadow-md space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold text-white">{notification.title}</h2>
                                        <p className="text-gray-300 text-lg">{notification.description}</p>
                                        <span className="text-gray-400 text-sm">
                                            {new Date(notification.createdAt).toLocaleString()}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => removeNotification(notification.id)}
                                        className="text-green-400 hover:text-green-600 flex items-center gap-2 text-lg"
                                    >
                                        <FaCheckCircle className="text-xl" />
                                        <span className="hidden md:inline">Mark as Read</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center text-xl">No notifications available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
