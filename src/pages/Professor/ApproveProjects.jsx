import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ApproveProjects = () => {
    const [projects, setProjects] = useState([
        { id: 1, title: 'AI-Powered Chatbot', student: 'John Doe', status: 'Pending' },
        { id: 2, title: 'Blockchain-Based Voting', student: 'Jane Smith', status: 'Pending' },
        { id: 3, title: 'E-Commerce Optimization', student: 'Alice Johnson', status: 'Pending' }
    ]);

    const handleApprove = (id) => {
        setProjects(projects.map(proj =>
            proj.id === id ? { ...proj, status: 'Approved' } : proj
        ));
    };

    const handleReject = (id) => {
        setProjects(projects.map(proj =>
            proj.id === id ? { ...proj, status: 'Rejected' } : proj
        ));
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] flex items-center justify-center p-10">
            <div className="w-full max-w-3xl bg-[#264653] p-10 rounded-3xl shadow-lg text-white">
                <motion.h1
                    className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaClipboardList className="text-yellow-300" /> Approve Projects
                </motion.h1>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <li key={project.id} className="p-4 bg-gray-800 rounded-xl flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">{project.title}</p>
                                <p className="text-gray-300 text-sm">Student: {project.student}</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                {project.status === 'Pending' ? (
                                    <>
                                        <button
                                            className="text-green-400 text-2xl"
                                            onClick={() => handleApprove(project.id)}
                                        >
                                            <FaCheckCircle />
                                        </button>
                                        <button
                                            className="text-red-400 text-2xl"
                                            onClick={() => handleReject(project.id)}
                                        >
                                            <FaTimesCircle />
                                        </button>
                                    </>
                                ) : (
                                    <span
                                        className={`text-sm font-semibold px-3 py-1 rounded-xl ${project.status === 'Approved' ? 'bg-green-600' : 'bg-red-600'
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ApproveProjects;
