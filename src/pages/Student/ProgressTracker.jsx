import React from 'react';
import { useParams } from 'react-router-dom';

const ProgressTracker = () => {
    const { title } = useParams();

    // Format title (replace hyphens with spaces)
    const formattedTitle = title.replace(/-/g, ' ');

    // Dummy data for progress tracking
    const projectDetails = {
        title: formattedTitle,
        admin: 'John Doe',
        professor: ['Dr. Smith'],
        collaborators: [
            { name: 'Alice', task: 'Frontend Development', progress: 80 },
            { name: 'Bob', task: 'Backend Development', progress: 60 },
            { name: 'Charlie', task: 'UI/UX Design', progress: 90 }
        ],
        mentors: [
            { name: 'Dr. Alan', progress: 70 },
            { name: 'Dr. Emma', progress: 85 }
        ]
    };

    // Calculate overall progress
    const totalProgress =
        (projectDetails.collaborators.reduce((sum, collab) => sum + collab.progress, 0) +
            projectDetails.mentors.reduce((sum, mentor) => sum + mentor.progress, 0)) /
        (projectDetails.collaborators.length + projectDetails.mentors.length);

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-8 md:p-12 w-full flex items-center justify-center overflow-auto">
            <div className="w-full max-w-4xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-8 md:p-12 space-y-8">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center capitalize">
                    {projectDetails.title}
                </h1>

                {/* Project Overview */}
                <div className="space-y-4">
                    <p className="text-gray-300 text-lg">
                        <span className="font-semibold text-white">Admin:</span> {projectDetails.admin}
                    </p>
                    <p className="text-gray-300 text-lg">
                        <span className="font-semibold text-white">Professor:</span>{' '}
                        {projectDetails.professor.join(', ')}
                    </p>
                </div>

                {/* Overall Progress */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Overall Progress</h2>
                    <p className="text-gray-300 text-lg">{totalProgress.toFixed(2)}% Complete</p>
                </div>

                {/* Collaborator Progress */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Collaborators</h2>
                    {projectDetails.collaborators.map((collaborator, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-gray-300">
                                {collaborator.name} - {collaborator.task}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                {collaborator.progress}% Complete
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mentor Progress */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Mentors</h2>
                    {projectDetails.mentors.map((mentor, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-gray-300">{mentor.name}</p>
                            <p className="text-gray-400 text-sm mt-1">
                                {mentor.progress}% Complete
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
