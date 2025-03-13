import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProjectContext } from '../context/ProjectContext';
import { FaProjectDiagram, FaClock, FaUserFriends, FaUserTie, FaTools, FaFileAlt } from 'react-icons/fa';
import { SuccessNotify } from '../../components/common/Notify';

const ProjectProposalForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [skills, setSkills] = useState('');
    const [collaborators, setCollaborators] = useState('');
    const [mentors, setMentors] = useState('');
    const { addNotification } = useProjectContext()
    const handleSubmit = (e) => {
        addNotification("new project proposed", title)
        SuccessNotify("project proposed successfully")
        e.preventDefault();
        console.log('Project Proposal Submitted:', { title, description, duration, skills, collaborators, mentors });
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-6 md:p-12 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-2xl overflow-hidden p-8 md:p-12">
                <motion.h1
                    className="text-4xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaProjectDiagram className="text-blue-300" /> Project Proposal Form
                </motion.h1>
                <p className="text-center text-gray-300 mb-6">Fill out the details below to propose a new project.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {[
                        { label: 'Project Title', value: title, setter: setTitle, type: 'text', placeholder: 'Enter project title', icon: <FaFileAlt />, info: 'Give your project a short and clear name.' },
                        { label: 'Description', value: description, setter: setDescription, type: 'textarea', placeholder: 'Describe the project in detail', icon: <FaFileAlt />, info: 'Provide a brief yet informative description of the project.' },
                        { label: 'Duration', value: duration, setter: setDuration, type: 'text', placeholder: 'Enter project duration (e.g., 3 months)', icon: <FaClock />, info: 'Specify how long the project is expected to take.' },
                        { label: 'Skills Required', value: skills, setter: setSkills, type: 'text', placeholder: 'List required skills (e.g., React, Node.js)', icon: <FaTools />, info: 'Mention the key skills needed for the project.' },
                        { label: 'Number of Collaborators', value: collaborators, setter: setCollaborators, type: 'number', placeholder: 'Enter number of collaborators', icon: <FaUserFriends />, info: 'Specify how many team members you need.' },
                        { label: 'Number of Mentors Required', value: mentors, setter: setMentors, type: 'number', placeholder: 'Enter number of mentors required', icon: <FaUserTie />, info: 'Indicate the number of mentors required for guidance.' }
                    ].map(({ label, value, setter, type, placeholder, icon, info }, index) => (
                        <div key={index} className="space-y-2">
                            <label className="block text-white font-medium flex items-center gap-2 text-lg">{icon} {label}</label>
                            <p className="text-gray-400 text-sm">{info}</p>
                            {type === 'textarea' ? (
                                <textarea
                                    value={value}
                                    onChange={(e) => setter(e.target.value)}
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-700 text-white h-32"
                                    placeholder={placeholder}
                                    required
                                />
                            ) : (
                                <input
                                    type={type}
                                    value={value}
                                    onChange={(e) => setter(e.target.value)}
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-700 text-white"
                                    placeholder={placeholder}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <motion.button
                        type="submit"
                        className="w-1/2 ml-28 bg-gray-200 text-gray-900  px-6 py-4 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center gap-3 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit Proposal
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default ProjectProposalForm;