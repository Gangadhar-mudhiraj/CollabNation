import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCheckCircle, FaClock } from 'react-icons/fa';

const MyProjects = () => {
    const projects = [
        {
            title: 'AI Chatbot Development',
            status: 'Approved',
            proposalDate: '2024-02-10',
            approvalDate: '2024-02-15'
        },
        {
            title: 'Blockchain-based Voting System',
            status: 'Proposed',
            proposalDate: '2024-03-05',
            approvalDate: 'Pending'
        },
        {
            title: 'E-commerce Platform',
            status: 'Approved',
            proposalDate: '2024-01-20',
            approvalDate: '2024-01-25'
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
                    <FaClipboardList className="text-blue-300" /> My Projects
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">View all your proposed and approved projects.</p>
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-md space-y-3">
                            <h2 className="text-2xl text-white font-semibold">{project.title}</h2>
                            <p className="text-gray-300">Status: <span className={project.status === 'Approved' ? 'text-green-400' : 'text-yellow-300'}>{project.status}</span></p>
                            <p className="text-gray-400 flex items-center gap-2"><FaClock /> Proposal Date: {project.proposalDate}</p>
                            <p className="text-gray-400 flex items-center gap-2"><FaCheckCircle /> Approval Date: {project.approvalDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
