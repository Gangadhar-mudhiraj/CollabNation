import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCommentDots } from "react-icons/fa";
import { SuccessNotify, FailureNotify } from "../../components/common/Notify"; // Fixed import path

const WeeklyReview = ({ weeklyData }) => {
    const [comments, setComments] = useState("");

    const handleSubmit = () => {
        if (comments.trim()) {
            SuccessNotify(`Weekly review submitted:\nComments: ${comments}`);
            // Add API call to submit the review to backend
            setComments(""); // Clear after submission
        } else {
            FailureNotify("Please add some comments before submitting.");
        }
    };

    const handleAddComment = () => {
        if (comments.trim()) {
            SuccessNotify(`Comment added:\n${comments}`);
            // Add API call to add comment to backend
            setComments(""); // Clear after submission
        } else {
            FailureNotify("Please write a comment before adding.");
        }
    };


    const completedPercentage = weeklyData?.totalTasks
        ? (weeklyData.completedTasks / weeklyData.totalTasks) * 100
        : 0;

    return (
        <div className="min-h-screen bgcolor p-10 md:p-16 w-full flex items-center justify-center overflow-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gray-700 text-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-700 w-full max-w-3xl"
            >
                {/* Title */}
                <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">
                    Weekly Review
                </h2>

                {/* Key Metrics */}
                <div className="space-y-4 text-lg text-gray-300">
                    <p>
                        <strong className="text-white">Total Tasks:</strong>{" "}
                        {weeklyData?.totalTasks || 0}
                    </p>
                    <p>
                        <strong className="text-white">Completed Tasks:</strong>{" "}
                        {weeklyData?.completedTasks || 0}
                    </p>
                    <p>
                        <strong className="text-white">Pending Tasks:</strong>{" "}
                        {weeklyData?.pendingTasks || 0}
                    </p>
                    <p>
                        <strong className="text-white">Issues Raised:</strong>{" "}
                        {weeklyData?.issuesRaised || 0}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-gray-800 rounded-full h-3">
                    <div
                        className="bg-blue-500 h-3 rounded-full transition-all"
                        style={{ width: `${completedPercentage}%` }}
                    ></div>
                    <p className="text-right text-sm mt-2 text-[#38bdf8]">
                        {completedPercentage.toFixed(2)}% Completed
                    </p>
                </div>

                {/* Comments */}
                <div className="mt-6">
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="Add your comments or self-evaluation..."
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        rows="3"
                    ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                    >
                        <FaPaperPlane /> Submit Review
                    </button>
                    <button
                        onClick={handleAddComment}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                    >
                        <FaCommentDots /> Add Comment
                    </button>

                </div>
            </motion.div>
        </div>
    );
};

export default WeeklyReview;
