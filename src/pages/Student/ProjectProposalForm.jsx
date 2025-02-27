import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectProposalForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Project Proposal Submitted:', { title, description });
    };

    return (
        <div className="h-screen bg-gray-100 p-8 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden h-1/2 mt-16">
                <div className="p-8">
                    <motion.h1
                        className="text-3xl font-bold mb-6 text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Project Proposal Form
                    </motion.h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700">Project Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter project title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter project description"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Proposal
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectProposalForm;
