import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = [
        { id: 1, title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.' },
        { id: 2, title: 'E-commerce Platform', description: 'A full-fledged e-commerce solution.' },
        { id: 3, title: 'Social Media App', description: 'Connect and share with people worldwide.' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Projects Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
