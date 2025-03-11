import React from 'react';
import { FaClock, FaUsers, FaTasks, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectReviews = () => {
    const projectUpdates = [
        {
            id: 1,
            title: 'AI-Powered Chatbot',
            completion: '75%',
            contributors: 5,
            extensionRequests: 2,
        },
        {
            id: 2,
            title: 'Blockchain-Based Voting',
            completion: '50%',
            contributors: 3,
            extensionRequests: 1,
        },
        {
            id: 3,
            title: 'E-Commerce Optimization',
            completion: '90%',
            contributors: 4,
            extensionRequests: 0,
        }
    ];

    return (
        <div className="min-h-screen bg-[#2a9d8f] flex items-center justify-center p-10">
            <div className="w-full max-w-3xl bg-[#264653] p-10 rounded-3xl shadow-lg text-white">
                <motion.h1
                    className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaChartLine className="text-yellow-300" /> Project Reviews
                </motion.h1>
                <ul className="space-y-4">
                    {projectUpdates.map((project) => (
                        <li key={project.id} className="p-4 bg-gray-800 rounded-xl">
                            <p className="text-lg font-semibold">{project.title}</p>
                            <div className="flex justify-between text-gray-300 text-sm mt-2">
                                <p className="flex items-center gap-2"><FaTasks className="text-blue-400" /> Completion: {project.completion}</p>
                                <p className="flex items-center gap-2"><FaUsers className="text-green-400" /> Contributors: {project.contributors}</p>
                                <p className="flex items-center gap-2"><FaClock className="text-red-400" /> Extension Requests: {project.extensionRequests}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectReviews;