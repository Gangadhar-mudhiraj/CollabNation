import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserFriends, FaUserTie } from 'react-icons/fa';
import { SuccessNotify, FailureNotify, Notify } from '../../components/common/Notify'; // Import notifications

const ProjectCard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applicationType, setApplicationType] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleApply = (type) => {
        setApplicationType(type);
        setIsModalOpen(true);
        Notify(`Applying as ${type}`); // Simple notification
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            FailureNotify('Please fill in all fields before submitting.');
            return;
        }

        SuccessNotify(`Successfully applied as ${applicationType} for ${project.title}`);
        console.log(`Applied as ${applicationType} for ${project.title}`, formData);

        setFormData({ name: '', email: '' }); // Clear form
        setIsModalOpen(false); // Close modal
        navigate('/projects/approved'); // Redirect after submission
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-8">
                <motion.h1
                    className="text-4xl font-bold text-center text-white flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>
                <p className="text-center text-gray-300 text-lg">{project.description}</p>
                <div className="space-y-4 text-gray-300">
                    <p><strong>Duration:</strong> {project.duration}</p>
                    <p><strong>Skills:</strong> {project.skills}</p>
                    <p><strong>Collaborators:</strong> {project.collaborators}</p>
                    <p><strong>Mentors:</strong> {project.mentors}</p>
                </div>

                {/* Apply Buttons */}
                <div className="mt-6 flex justify-center gap-6">
                    <button
                        onClick={() => handleApply('Collaborator')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2"
                    >
                        <FaUserFriends /> Apply as Collaborator
                    </button>
                    <button
                        onClick={() => handleApply('Mentor')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2"
                    >
                        <FaUserTie /> Apply as Mentor
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="bg-[#264653] p-6 rounded-xl shadow-lg w-96">
                        <h2 className="text-xl font-bold text-white mb-4">
                            Apply as {applicationType}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl"
                            >
                                Submit
                            </button>
                        </form>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-xl"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
