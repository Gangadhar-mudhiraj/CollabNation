import React from 'react';
import { FaClipboardList, FaCheckCircle, FaChartBar, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfessorDashboard = () => {
    const stats = {
        totalProjects: 15,
        pendingApprovals: 3,
        completedProjects: 10,
        creditsAllocated: 18
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] flex items-center justify-center p-10">
            <div className="w-full max-w-4xl bg-[#264653] p-10 rounded-3xl shadow-lg text-white">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaChartBar className="text-yellow-300" /> Professor Dashboard
                </motion.h1>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
                        <FaClipboardList className="text-blue-400 text-4xl" />
                        <div>
                            <p className="text-lg font-semibold">Total Projects</p>
                            <p className="text-2xl font-bold">{stats.totalProjects}</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
                        <FaCheckCircle className="text-green-400 text-4xl" />
                        <div>
                            <p className="text-lg font-semibold">Completed Projects</p>
                            <p className="text-2xl font-bold">{stats.completedProjects}</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
                        <FaClipboardList className="text-yellow-400 text-4xl" />
                        <div>
                            <p className="text-lg font-semibold">Pending Approvals</p>
                            <p className="text-2xl font-bold">{stats.pendingApprovals}</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
                        <FaAward className="text-purple-400 text-4xl" />
                        <div>
                            <p className="text-lg font-semibold">Credits Allocated</p>
                            <p className="text-2xl font-bold">{stats.creditsAllocated}</p>
                        </div>
                    </div>
                </div>

                {/* Pending Approvals Section */}
                <div className="mt-8 bg-gray-900 p-6 rounded-xl">
                    <p className="text-xl font-semibold text-yellow-300 mb-4">
                        Pending Approvals: {stats.pendingApprovals}
                    </p>
                    <p className="text-gray-300">
                        You have <span className="text-yellow-300 font-bold">{stats.pendingApprovals}</span> projects waiting for approval.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfessorDashboard;
