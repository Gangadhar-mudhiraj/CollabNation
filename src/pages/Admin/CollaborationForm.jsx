import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SuccessNotify, FailureNotify } from '../../components/common/Notify';

const CollaborationForm = () => {
    const [formData, setFormData] = useState({
        collaboratorStartDate: '',
        collaboratorEndDate: '',
        mentorStartDate: '',
        mentorEndDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { collaboratorStartDate, collaboratorEndDate, mentorStartDate, mentorEndDate } = formData;

        // Validate collaborator time period
        if (!collaboratorStartDate || !collaboratorEndDate) {
            FailureNotify("Please select both start and end dates for collaborators.");
            return;
        }
        if (new Date(collaboratorStartDate) >= new Date(collaboratorEndDate)) {
            FailureNotify("End date for collaborators must be after the start date.");
            return;
        }

        // Validate mentor time period
        if (!mentorStartDate || !mentorEndDate) {
            FailureNotify("Please select both start and end dates for mentors.");
            return;
        }
        if (new Date(mentorStartDate) >= new Date(mentorEndDate)) {
            FailureNotify("End date for mentors must be after the start date.");
            return;
        }

        SuccessNotify("Opened timings for collaborators and mentors");
        console.log({
            collaboratorStartDate,
            collaboratorEndDate,
            mentorStartDate,
            mentorEndDate,
        });

        // API call to start collaboration period for both collaborators and mentors
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-10 md:p-16 w-full flex items-center justify-center">
            <motion.div
                className="w-full max-w-2xl bg-[#264653] shadow-lg rounded-3xl overflow-hidden p-10 md:p-14 space-y-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white text-center">
                    Open Collaboration Period
                </h2>

                {/* Collaborator Dates */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Collaborators</h3>
                        <input
                            type="date"
                            name="collaboratorStartDate"
                            value={formData.collaboratorStartDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="date"
                            name="collaboratorEndDate"
                            value={formData.collaboratorEndDate}
                            onChange={handleChange}
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mentor Dates */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Mentors</h3>
                        <input
                            type="date"
                            name="mentorStartDate"
                            value={formData.mentorStartDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="date"
                            name="mentorEndDate"
                            value={formData.mentorEndDate}
                            onChange={handleChange}
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Start Collaboration Period
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default CollaborationForm;
