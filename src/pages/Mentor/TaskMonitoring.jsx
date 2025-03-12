import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineReport, MdMessage } from "react-icons/md";
import { SuccessNotify, FailureNotify } from "../../components/common/Notify"; // Import toasts

const TaskMonitoring = ({ task }) => {
    const [status, setStatus] = useState(task?.status || "Pending");

    const sampleTask = {
        title: "Bug Fixing in Backend",
        deadline: "2025-03-20",
        status: "In Progress",
        description: "Resolve API response issues and optimize database queries for better performance."
    };

    task = task ? task : sampleTask;

    const handleUpdateStatus = () => {
        if (status) {
            SuccessNotify(`Task status updated to: ${status}`);
            // Add API call to update task status in the backend
        } else {
            FailureNotify("Failed to update task status");
        }
    };

    const handleContactDevelopers = () => {
        try {
            SuccessNotify("Contacting developers...");
            // Add logic to handle contacting developers
        } catch (error) {
            FailureNotify("Failed to contact developers");
        }
    };

    const handleReportToAdmin = () => {
        try {
            SuccessNotify("Reporting to project admin...");
            // Add logic to handle reporting
        } catch (error) {
            FailureNotify("Failed to report to admin");
        }
    };

    return (
        <div className="min-h-screen bgcolor p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gray-800 text-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-700 w-full max-w-3xl"
            >
                {/* Task Title */}
                <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">
                    {task?.title || "AI development"}
                </h2>

                {/* Task Details */}
                <div className="space-y-4 text-lg text-gray-300">
                    <p>
                        <strong className="text-white py-3 ">Deadline:</strong>{" "}
                        {task?.deadline || "Not Assigned"}
                    </p>
                    <p>
                        <strong className="text-white">Status:</strong>{" "}
                        {status}
                    </p>
                    <p>
                        <strong className="text-white">Description:</strong>{" "}
                        {task?.description || "No description available"}
                    </p>
                </div>

                {/* Status Update */}
                <div className="mt-6">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="Pending" className="text-black">Pending</option>
                        <option value="In Progress" className="text-black">In Progress</option>
                        <option value="Completed" className="text-black">Completed</option>
                    </select>
                    <button
                        onClick={handleUpdateStatus}
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                    >
                        <FaCheckCircle /> Update Status
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={handleContactDevelopers}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                    >
                        <MdMessage /> Contact Developers
                    </button>
                    <button
                        onClick={handleReportToAdmin}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
                    >
                        <MdOutlineReport /> Report to Admin
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default TaskMonitoring;
