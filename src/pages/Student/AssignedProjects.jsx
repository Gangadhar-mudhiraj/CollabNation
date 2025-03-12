import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssignedProjects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            id: 1,
            title: 'Social Media Analytics Tool',
            description: 'A tool to analyze user behavior and engagement patterns on social media platforms.',
            admin: 'John Doe',
            professors: ['Dr. Smith', 'Dr. Johnson'],
            tasks: [
                { task: 'Design UI', deadline: '2025-04-10', status: 'In Progress' },
                { task: 'Build Backend', deadline: '2025-04-25', status: 'Pending' },
                { task: 'Data Analysis', deadline: '2025-05-15', status: 'Not Started' }
            ]
        },
        {
            id: 2,
            title: 'AI-Based Chatbot',
            description: 'An AI-powered chatbot to provide customer support and automate responses.',
            admin: 'Jane Doe',
            professors: ['Dr. Alan', 'Dr. Kim'],
            tasks: [
                { task: 'Train Chatbot Model', deadline: '2025-03-20', status: 'Completed' },
                { task: 'Develop NLP Engine', deadline: '2025-04-10', status: 'In Progress' }
            ]
        },
        {
            id: 3,
            title: 'E-Commerce Recommendation System',
            description: 'A machine learning model to recommend products based on user behavior.',
            admin: 'Mike Ross',
            professors: ['Dr. Harvey', 'Dr. Specter'],
            tasks: [
                { task: 'Create Data Pipeline', deadline: '2025-03-15', status: 'Completed' },
                { task: 'Build Recommendation Model', deadline: '2025-04-01', status: 'Pending' },
                { task: 'Deploy to Production', deadline: '2025-04-20', status: 'Not Started' }
            ]
        },
        {
            id: 4,
            title: 'Blockchain-Based Voting System',
            description: 'A secure blockchain-based voting platform for online elections.',
            admin: 'Jessica Pearson',
            professors: ['Dr. Litt', 'Dr. Zane'],
            tasks: [
                { task: 'Design Smart Contracts', deadline: '2025-02-25', status: 'Completed' },
                { task: 'Develop Voting Interface', deadline: '2025-03-10', status: 'In Progress' },
                { task: 'Security Testing', deadline: '2025-03-25', status: 'Pending' }
            ]
        }
    ];

    const handleTrackProgress = (title) => {
        const formattedTitle = title.trim().replace(/\s+/g, '-');
        navigate(`/progress/${formattedTitle}`);
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-8 md:p-12 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-8 md:p-12 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Assigned Projects
                </h1>
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 cursor-pointer transition duration-300"
                            onClick={() => handleTrackProgress(project.title)}
                        >
                            {/* Project Title */}
                            <h2 className="text-white text-xl font-semibold mb-2">
                                {project.title}
                            </h2>

                            {/* Project Description */}
                            <p className="text-gray-300 text-sm mb-3">
                                {project.description}
                            </p>

                            {/* Admin */}
                            <p className="text-gray-400 text-sm">
                                <span className="font-semibold text-white">Admin:</span> {project.admin}
                            </p>

                            {/* Professors */}
                            <p className="text-gray-400 text-sm">
                                <span className="font-semibold text-white">Professors:</span>{' '}
                                {project.professors.join(', ')}
                            </p>

                            {/* Tasks */}
                            <div className="mt-3">
                                <h3 className="text-white font-semibold mb-2">Tasks:</h3>
                                <div className="space-y-1">
                                    {project.tasks.map((task, index) => (
                                        <div key={index} className="flex justify-between text-gray-400 text-sm">
                                            <span>{task.task}</span>
                                            <span className={`${task.status === 'Completed' ? 'text-green-400' : task.status === 'In Progress' ? 'text-yellow-400' : 'text-red-400'}`}>
                                                {task.status}
                                            </span>
                                            <span className="text-gray-300">{task.deadline}</span>
                                        </div>
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

export default AssignedProjects;
