import React from 'react';
import { motion } from 'framer-motion';
import { FiFilePlus, FiUserCheck, FiStar } from 'react-icons/fi';

const StudentDashboard = () => {
    return (
        <div className="h-screen bg-gray-100 p-8 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden h-2/3 mt-16">
                <div className="p-8 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                    <p className="text-gray-600 mt-2">Explore your opportunities as a student by managing proposals, gaining credits, and more.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-500 text-white p-6 rounded-2xl shadow-md flex items-center">
                        <FiFilePlus className="mr-4 text-3xl" />
                        <div>
                            <h2 className="text-xl font-semibold">Add New Proposal</h2>
                            <p className="text-sm">Submit innovative ideas as a student or mentor.</p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-green-500 text-white p-6 rounded-2xl shadow-md flex items-center">
                        <FiUserCheck className="mr-4 text-3xl" />
                        <div>
                            <h2 className="text-xl font-semibold">Apply for Proposal</h2>
                            <p className="text-sm">Participate as a student or mentor in exciting projects.</p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-500 text-white p-6 rounded-2xl shadow-md flex items-center">
                        <FiStar className="mr-4 text-3xl" />
                        <div>
                            <h2 className="text-xl font-semibold">Gain Credits</h2>
                            <p className="text-sm">Earn credits upon successful task completion.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;