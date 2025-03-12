import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCheckCircle, FaClock, FaUsers, FaPlay, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
    const [showApplications, setShowApplications] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [showApplicantDetails, setShowApplicantDetails] = useState(false);
    const [currentApplicant, setCurrentApplicant] = useState(null);
    const [actionStatus, setActionStatus] = useState(null);

    const navigate = useNavigate()
    const handleTrackProgress = (title) => {
        const formattedTitle = title.trim().replace(/\s+/g, '-');
        console.log(formattedTitle);
        navigate(`/progress/${formattedTitle}`);
    };



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
        },
        {
            title: 'Health Monitoring App',
            status: 'Recruiting',
            proposalDate: '2024-04-10',
            approvalDate: 'Pending'
        },
        {
            title: 'Social Media Analytics Tool',
            status: 'Active',
            proposalDate: '2024-01-15',
            approvalDate: '2024-01-20'
        }
    ];

    const dummyApplications = [
        { name: 'John Doe', role: 'Frontend Developer', experience: '2 years', skills: ['React', 'JavaScript', 'CSS'] },
        { name: 'Jane Smith', role: 'Backend Developer', experience: '3 years', skills: ['Node.js', 'MongoDB', 'Express'] },
        { name: 'Alice Johnson', role: 'UI/UX Designer', experience: '1.5 years', skills: ['Figma', 'Sketch', 'Adobe XD'] }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved':
                return 'text-green-400';
            case 'Proposed':
                return 'text-yellow-300';
            case 'Recruiting':
                return 'text-blue-300';
            case 'Active':
                return 'text-purple-400';
            default:
                return 'text-gray-300';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Approved':
                return <FaCheckCircle />;
            case 'Proposed':
                return <FaClock />;
            case 'Recruiting':
                return <FaUsers />;
            case 'Active':
                return <FaPlay />;
            default:
                return null;
        }
    };

    const handleViewApplications = (project) => {
        setCurrentProject(project);
        setShowApplications(true);
    };

    const closeApplications = () => {
        setShowApplications(false);
        setCurrentProject(null);
    };

    const handleViewApplicantDetails = (applicant) => {
        setCurrentApplicant(applicant);
        setActionStatus(null); // Reset status
        setShowApplicantDetails(true);
    };

    const closeApplicantDetails = () => {
        setShowApplicantDetails(false);
        setCurrentApplicant(null);
    };

    const handleApprove = () => {
        setActionStatus('Approved');
    };

    const handleReject = () => {
        setActionStatus('Rejected');
    };

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
                <p className="text-center text-gray-300 text-lg">View all your proposed, approved, and ongoing projects.</p>
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-md space-y-3">
                            <h2 className="text-2xl text-white font-semibold">{project.title}</h2>
                            <p className="text-gray-300 flex items-center gap-2">
                                {getStatusIcon(project.status)}
                                Status: <span className={getStatusColor(project.status)}>{project.status}</span>
                            </p>
                            <p className="text-gray-400 flex items-center gap-2">
                                <FaClock /> Proposal Date: {project.proposalDate}
                            </p>
                            <p className="text-gray-400 flex items-center gap-2">
                                <FaCheckCircle /> Approval Date: {project.approvalDate}
                            </p>
                            {project.status === 'Recruiting' && (
                                <button
                                    onClick={() => handleViewApplications(project)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                >
                                    View Applications
                                </button>
                            )}
                            {project.status === 'Active' && (
                                <button
                                    onClick={() => handleTrackProgress(project.title)}
                                    className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                                >
                                    Track Progress
                                </button>
                            )}

                        </div>
                    ))}
                </div>
            </div>

            {/* Applications Modal */}
            {showApplications && currentProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-white font-semibold">
                                Applications for "{currentProject.title}"
                            </h2>
                            <button onClick={closeApplications} className="text-gray-400 hover:text-white">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {dummyApplications.map((app, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleViewApplicantDetails(app)}
                                    className="p-4 bg-gray-800 rounded-md shadow cursor-pointer hover:bg-gray-700 transition"
                                >
                                    <p className="text-white font-medium">{app.name}</p>
                                    <p className="text-gray-400">{app.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Applicant Details Modal */}
            {showApplicantDetails && currentApplicant && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-white font-semibold">{currentApplicant.name}</h2>
                            <button onClick={closeApplicantDetails} className="text-gray-400 hover:text-white">
                                <FaTimes />
                            </button>
                        </div>
                        <p className="text-gray-300 mb-2">Role: {currentApplicant.role}</p>
                        <p className="text-gray-300 mb-2">Experience: {currentApplicant.experience}</p>
                        <p className="text-gray-300 mb-4">Skills: {currentApplicant.skills.join(', ')}</p>
                        {actionStatus ? (
                            <p className={`text-center font-semibold ${actionStatus === 'Approved' ? 'text-green-400' : 'text-red-400'}`}>
                                {actionStatus}
                            </p>
                        ) : (
                            <div className="flex gap-4">
                                <button onClick={handleApprove} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Approve</button>
                                <button onClick={handleReject} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Reject</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProjects;
