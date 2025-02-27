import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';

const ApprovedProjects = () => {
    const projects = [
        { id: 1, title: 'Project A' },
        { id: 2, title: 'Project B' },
        { id: 3, title: 'Project C' },
    ];

    return (
        <div className="h-screen bg-gray-100 p-8 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden h-1/2 mt-16 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Approved Projects</h1>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <motion.li
                            key={project.id}
                            className="bg-gray-200 p-4 rounded-lg shadow flex items-center justify-between hover:bg-gray-300 transition"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link to={`/projects/${project.id}`} className="text-lg text-blue-600 hover:underline">
                                {project.title}
                            </Link>
                            <FiArrowRightCircle className="text-blue-600 text-2xl" />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ApprovedProjects;