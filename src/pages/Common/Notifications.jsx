import React from 'react';
import { motion } from 'framer-motion';

const Notifications = () => {
    const notifications = [
        'Your project proposal has been approved!',
        'New message from your professor.',
        'Team formation deadline approaching.',
    ];

    return (
        <div className="h-screen bg-gray-100 p-8 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden  mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6"
                >
                    <h1 className="text-2xl font-bold mb-4">Notifications</h1>
                    <ul className="space-y-3">
                        {notifications.map((notification, index) => (
                            <li key={index} className="bg-yellow-100 p-4 rounded-md shadow">
                                {notification}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Notifications;
