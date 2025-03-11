import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaProjectDiagram, FaClock, FaUserFriends, FaUserTie, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/common/Title';
const ApprovedProjects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: 'AI Chatbot Development',
            description: 'An AI-powered chatbot for customer support, integrating NLP and machine learning.',
            duration: '6 months',
            skills: 'Python, NLP, Machine Learning',
            collaborators: 5,
            mentors: 2
        },
        {
            title: 'E-commerce Platform',
            description: 'A fully-featured e-commerce platform with user authentication and payment gateway integration.',
            duration: '8 months',
            skills: 'React, Node.js, MongoDB, Stripe API',
            collaborators: 6,
            mentors: 3
        },
        {
            title: 'Blockchain-based Voting System',
            description: 'A secure and transparent blockchain-powered voting system for online elections.',
            duration: '5 months',
            skills: 'Blockchain, Ethereum, Solidity, Web3.js',
            collaborators: 4,
            mentors: 2
        }
    ];

    const handleViewDetails = (project) => {
        navigate('/project-details', { state: project });
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-5xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-8">
                <motion.h1
                    className="text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaCheckCircle className="text-green-300" /> Projects
                </motion.h1>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-8 bg-gray-800 rounded-xl shadow-md space-y-4">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                <FaProjectDiagram className="text-blue-300" /> {project.title}
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 text-gray-400 text-lg">
                                <span className="flex items-center gap-2"><FaClock className="text-yellow-300" /> {project.duration}</span>
                                <span className="flex items-center gap-2"><FaTools className="text-red-300" /> {project.skills}</span>
                                <span className="flex items-center gap-2"><FaUserFriends className="text-purple-300" /> {project.collaborators} Collaborators</span>
                                <span className="flex items-center gap-2"><FaUserTie className="text-green-300" /> {project.mentors} Mentors</span>
                            </div>
                            <button
                                onClick={() => handleViewDetails(project)}
                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApprovedProjects;
