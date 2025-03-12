import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
import { SuccessNotify, FailureNotify, Notify } from "../../components/common/Notify";
import { MdOutlineReport, MdMessage } from "react-icons/md";

const ProjectGuidance = ({ project }) => {
    const [status, setStatus] = useState(project?.status || "Pending");

    const handleUpdateStatus = () => {

        // Example API call simulation
        SuccessNotify(`Project status updated to: ${status}`);
        try {
            // Simulate success/failure
            if (Math.random() > 0.3) {
                // TODO: Add actual API call to update the status in the backend
            } else {
                throw new Error("Failed to update status");
            }
        } catch (error) {
            FailureNotify(error.message);
        }
    };

    return (
        <div className="min-h-screen bgcolor p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#264653] text-white rounded-3xl p-10 md:p-14 shadow-lg border border-white/20 w-full max-w-3xl"
            >
                {/* Project Title */}
                <h2 className="text-3xl font-bold text-[#e9c46a] flex items-center gap-3 mb-6">
                    {project?.title || "Untitled Project"}
                </h2>

                {/* Project Details */}
                <div className="space-y-4 text-lg text-gray-300">
                    <p>
                        <strong className="text-white">Deadline:</strong>{" "}
                        {project?.deadline || "Not Assigned"}
                    </p>
                    <p>
                        <strong className="text-white">Status:</strong>{" "}
                        {status}
                    </p>
                    <p>
                        <strong className="text-white">Description:</strong>{" "}
                        {project?.description || "No description available"}
                    </p>
                </div>

                {/* Status Update */}
                <div className="mt-6">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] transition"
                    >
                        <option value="Pending" className="text-black">Pending</option>
                        <option value="In Progress" className="text-black">In Progress</option>
                        <option value="Completed" className="text-black">Completed</option>
                    </select>
                    <button
                        onClick={handleUpdateStatus}
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                    >
                        <FaRegEdit /> Update Status
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => Notify("Contacting developers...")}
                        className="flex-1 bg-[#e76f51] hover:bg-[#c65f41] text-white font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                    >
                        <MdMessage /> Contact Developers
                    </button>
                    <button
                        onClick={() => Notify("Reporting to project admin...")}
                        className="flex-1 bg-[#f4a261] hover:bg-[#e99551] text-white font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                    >
                        <MdOutlineReport /> Report to Admin
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectGuidance;
