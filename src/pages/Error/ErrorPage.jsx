// src/pages/Error/ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                Sorry, the page you're looking for doesn't exist.
            </p>
            <div className="space-x-4">
                <button
                    onClick={handleGoBack}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                    Go Back
                </button>
                <button
                    onClick={handleGoHome}
                    className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                    Go Home
                </button>
            </div>
        </motion.div>
    );
};

export default ErrorPage;
