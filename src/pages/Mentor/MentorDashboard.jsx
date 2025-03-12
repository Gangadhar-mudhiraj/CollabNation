import React from "react";
import { FiUserCheck } from "react-icons/fi";
import Title from "../../components/common/Title";

const MentorDashboard = () => {
    return (
        <div className="flex items-center justify-center p-8 bgcolor">
            <div className="max-w-4xl w-full h-full overflow-auto shadow-lg rounded-2xl bg-b">
                {/* Dashboard Title */}
                <div className="p-6 text-center bg-gray-800 text-white">
                    <Title text="Mentor Dashboard" color="white" />
                    <p className="text-gray-100 mt-2">
                        Empower mentors to guide, support, and monitor tasks effectively to help students achieve their goals.
                    </p>
                </div>

                {/* Mentor Overview */}
                <div className="p-8 space-y-8">
                    {/* What is a Mentor Section */}
                    <section className="p-6 rounded-2xl shadow-md bg-[#264653] text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <FiUserCheck className="text-4xl text-[#e9c46a]" />
                            <Title text="What is a Mentor?" color="white" />
                        </div>
                        <p className="text-gray-300">
                            A mentor is a trusted guide who helps students or team members by providing insights, knowledge, and support to improve their performance and achieve their goals.
                        </p>
                    </section>

                    {/* Guidance and Support */}
                    <section className="p-6 rounded-2xl shadow-md bg-[#2a9d8f] text-white">
                        <Title text="Guidance and Support" color="white" />
                        <ul className="list-disc pl-6 mt-2 text-gray-100 space-y-2">
                            <li>Provide direction and advice on assigned tasks.</li>
                            <li>Help students solve technical and conceptual issues.</li>
                            <li>Encourage personal and professional growth.</li>
                        </ul>
                    </section>

                    {/* Task Monitoring */}
                    <section className="p-6 rounded-2xl shadow-md bg-[#e76f51] text-white">
                        <Title text="Task Monitoring" color="white" />
                        <ul className="list-disc pl-6 mt-2 text-gray-100 space-y-2">
                            <li>Track task progress and completion status.</li>
                            <li>Identify areas of improvement and provide constructive feedback.</li>
                            <li>Ensure timely completion of assigned tasks.</li>
                        </ul>
                    </section>

                    {/* Weekly Preview */}
                    <section className="p-6 rounded-2xl shadow-md bg-[#e9c46a] text-black">
                        <Title text="Weekly Preview" color="black" />
                        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                            <li>Set weekly targets and expectations.</li>
                            <li>Review previous week’s progress and challenges.</li>
                            <li>Plan for upcoming tasks and potential obstacles.</li>
                        </ul>
                    </section>
                </div>

                {/* Contact and Support */}
                <div className="p-6 text-center bg-gray-800 text-white mt-8 rounded-b-2xl">
                    <h2 className="text-2xl font-bold mb-4">Contact and Support</h2>
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={() => alert("Contacting Developer...")}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl"
                        >
                            Contact Developer
                        </button>
                        <button
                            onClick={() => alert("Reporting to Admin...")}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl"
                        >
                            Report to Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorDashboard;
