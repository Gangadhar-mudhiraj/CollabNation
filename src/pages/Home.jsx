import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTasks, FaUsers, FaBell, FaLightbulb, FaClipboardList, FaUserTie, FaCogs } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center">
            <div className="w-full max-w-5xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-10">
                {/* Header Section */}
                <motion.h1
                    className="text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaHome className="text-yellow-300" /> CollabNation
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">
                    CollabNation is a platform designed to enhance collaboration and project management within academic and professional settings.
                    Students, mentors, professors, and administrators can connect, propose, monitor, and manage projects effectively — all in one place.
                </p>

                {/* Key Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaProjectDiagram className="text-blue-300 text-3xl" />
                        <p className="text-white font-medium">Submit & Manage Project Proposals</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaTasks className="text-green-300 text-3xl" />
                        <p className="text-white font-medium">Track Project Progress & Assign Tasks</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaUsers className="text-purple-300 text-3xl" />
                        <p className="text-white font-medium">Collaborate with Team Members & Mentors</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center gap-4">
                        <FaBell className="text-red-300 text-3xl" />
                        <p className="text-white font-medium">Get Notified About Project Updates</p>
                    </div>
                </div>

                {/* Additional Benefits Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white text-center">Why Choose CollabNation?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-700 rounded-xl shadow-md flex items-center gap-4">
                            <FaLightbulb className="text-yellow-400 text-3xl" />
                            <div>
                                <h3 className="text-white font-semibold">Innovative Collaboration</h3>
                                <p className="text-gray-400 text-sm">
                                    Real-time communication and project tracking enable smooth teamwork and problem-solving.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-700 rounded-xl shadow-md flex items-center gap-4">
                            <FaClipboardList className="text-blue-400 text-3xl" />
                            <div>
                                <h3 className="text-white font-semibold">Structured Workflow</h3>
                                <p className="text-gray-400 text-sm">
                                    Well-organized project flow from proposal to completion ensures consistency.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-700 rounded-xl shadow-md flex items-center gap-4">
                            <FaUserTie className="text-green-400 text-3xl" />
                            <div>
                                <h3 className="text-white font-semibold">Expert Guidance</h3>
                                <p className="text-gray-400 text-sm">
                                    Mentors and professors provide valuable insights and feedback at each stage.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-700 rounded-xl shadow-md flex items-center gap-4">
                            <FaCogs className="text-purple-400 text-3xl" />
                            <div>
                                <h3 className="text-white font-semibold">Customizable Tools</h3>
                                <p className="text-gray-400 text-sm">
                                    Adaptable features to match project-specific requirements and team dynamics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-10 text-center">
                    <h2 className="text-3xl font-bold text-white">Get Started Today!</h2>
                    <p className="text-gray-300 mt-2">
                        Join CollabNation and experience a streamlined project management and collaboration platform.
                    </p>
                    <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
