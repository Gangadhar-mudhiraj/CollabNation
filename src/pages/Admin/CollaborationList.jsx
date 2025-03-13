import React from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';

const CollaborationList = () => {
    const projects = [
        {
            id: 1,
            title: 'AI-based Chatbot',
            collaborators: [
                { name: 'John Doe', status: 'Accepted' },
                { name: 'Jane Smith', status: 'Rejected' }
            ]
        },
        {
            id: 2,
            title: 'Blockchain Voting System',
            collaborators: [
                { name: 'Alice Johnson', status: 'Accepted' },
                { name: 'Bob Brown', status: 'Accepted' }
            ]
        },
        {
            id: 3,
            title: 'E-commerce Recommendation Engine',
            collaborators: [
                { name: 'Charlie Davis', status: 'Rejected' },
                { name: 'Daniel Evans', status: 'Accepted' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Collaboration List
                </h2>

                <div className="space-y-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#1d3557] rounded-2xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {project.title}
                            </h3>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white border-b border-gray-600">
                                        <th className="p-3 text-left">Collaborator</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.collaborators.map((collab, index) => (
                                        <tr key={index} className="border-b border-gray-700 hover:bg-[#2c4371] transition">
                                            <td className="p-3 text-white">{collab.name}</td>
                                            <td className="p-3">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-white ${collab.status === 'Accepted'
                                                            ? 'bg-green-500'
                                                            : 'bg-red-500'
                                                        }`}
                                                >
                                                    {collab.status}
                                                </span>
                                            </td>
                                            <td className="p-3 flex items-center justify-center gap-4">
                                                <button
                                                    className="text-blue-400 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                                                >
                                                    <FiEye size={20} />
                                                </button>
                                                <button
                                                    className="text-yellow-400 hover:text-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
                                                >
                                                    <FiEdit size={20} />
                                                </button>
                                                <button
                                                    className="text-red-400 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full"
                                                >
                                                    <FiTrash2 size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Show Approved Collaborators */}
                            <div className="mt-4">
                                <h4 className="text-lg font-medium text-white mb-2">
                                    Approved Collaborators:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.collaborators
                                        .filter((collab) => collab.status === 'Accepted')
                                        .map((collab, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-500 text-white px-3 py-1 rounded-full"
                                            >
                                                {collab.name}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollaborationList;
