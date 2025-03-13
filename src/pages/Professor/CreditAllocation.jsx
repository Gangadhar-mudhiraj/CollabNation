import React, { useState } from 'react';
import { FaUserGraduate, FaCheckCircle, FaTimesCircle, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Notify, SuccessNotify, FailureNotify } from '../../components/common/Notify';

const CreditAllocation = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'AI-Powered Chatbot',
            status: 'Success',
            contributors: [
                { name: 'John Doe', role: 'Mentor', active: true, credits: false },
                { name: 'Jane Smith', role: 'Collaborator', active: true, credits: false },
                { name: 'Alice Johnson', role: 'Admin', active: false, credits: false }
            ]
        },
        {
            id: 2,
            title: 'Blockchain-Based Voting',
            status: 'Fail',
            contributors: [
                { name: 'Mark Lee', role: 'Mentor', active: true, credits: false },
                { name: 'Sara Khan', role: 'Collaborator', active: false, credits: false }
            ]
        }
    ]);

    const allocateCredits = (projectId, contributorIndex) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === projectId
                    ? {
                        ...project,
                        contributors: project.contributors.map((contributor, index) =>
                            index === contributorIndex && contributor.active
                                ? { ...contributor, credits: true }
                                : contributor
                        )
                    }
                    : project
            )
        );

        const project = projects.find((p) => p.id === projectId);
        const contributor = project.contributors[contributorIndex];

        if (contributor.active) {
            SuccessNotify(`${contributor.name} was allocated credits successfully!`);
        } else {
            FailureNotify(`${contributor.name} is not active and cannot be allocated credits.`);
        }
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
                    <FaChartBar className="text-yellow-300" /> Credit Allocation
                </motion.h1>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div key={project.id} className="p-6 bg-gray-800 rounded-xl">
                            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                            <p className={`text-lg mb-4 ${project.status === 'Success' ? 'text-green-400' : 'text-red-400'}`}>
                                Status: {project.status}
                            </p>
                            <div className="space-y-3">
                                {project.contributors.map((contributor, index) => (
                                    <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                                        <p className="text-white">
                                            {contributor.name} - {contributor.role}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={
                                                    contributor.credits
                                                        ? 'text-green-400 font-semibold'
                                                        : 'text-gray-400'
                                                }
                                            >
                                                {contributor.credits ? 'Credits Allocated' : 'No Credits'}
                                            </span>
                                            {contributor.active && !contributor.credits && (
                                                <button
                                                    className="text-green-400 text-2xl"
                                                    onClick={() => allocateCredits(project.id, index)}
                                                >
                                                    <FaCheckCircle />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Notify />
        </div>
    );
};

export default CreditAllocation;
