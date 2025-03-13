import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SuccessNotify, FailureNotify } from '../../components/common/Notify';

const ProposalForm = () => {
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = () => {
        const { startDate, endDate } = formData;

        if (!startDate || !endDate) {
            FailureNotify("Please select both start and end dates.");
            return;
        }

        if (new Date(startDate) >= new Date(endDate)) {
            FailureNotify("End date must be after the start date.");
            return;
        }

        SuccessNotify("Proposal period opened successfully.");
        console.log({ startDate, endDate });

        // API call to open proposal period
    };

    return (
        <div className="min-h-screen bg-[#2a9d8f] p-16 md:p-24 flex items-center justify-center">
            <motion.div
                className="w-full max-w-3xl bg-[#264653] shadow-xl rounded-3xl p-14 md:p-20 space-y-12"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide">
                    Open Proposal Period
                </h2>

                {/* Rules and Guidelines */}
                <div className="bg-gray-800 text-white p-10 rounded-xl space-y-6">
                    <h3 className="text-2xl font-bold text-green-400">
                        📌 Rules and Guidelines:
                    </h3>
                    <ul className="list-disc list-inside space-y-4 text-gray-300 leading-relaxed">
                        <li>
                            ✅ A maximum of <span className="font-bold text-blue-400">30 projects</span> are accepted per semester.
                        </li>
                        <li>
                            ✅ Projects are approved or rejected within the specified proposal period.
                        </li>
                        <li>
                            ✅ Projects must be <span className="font-bold text-green-400">helpful and unique</span> to the college (not personal).
                        </li>
                        <li>
                            ✅ Selection follows a <span className="font-bold text-yellow-400">first-come, first-served</span> basis.
                        </li>
                        <li>
                            ✅ If a project is rejected, the next one in line will be considered until the limit of 30 is reached.
                        </li>
                        <li>
                            ✅ Example: If 40 applications are received and 30 are accepted, and one is rejected, the 31st project will be considered. If that is also rejected, the 32nd will be considered — and so on.
                        </li>
                    </ul>
                </div>

                {/* Proposal Form */}
                <div className="space-y-10">
                    {/* Start Date */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium text-lg">
                            Start Date
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* End Date */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium text-lg">
                            End Date
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl text-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Start Proposal Period
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProposalForm;
