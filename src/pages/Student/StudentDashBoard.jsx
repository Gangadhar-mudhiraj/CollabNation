import React from 'react';
import { motion } from 'framer-motion';
import { FiFilePlus, FiUserCheck, FiStar } from 'react-icons/fi';
import Title from '../../components/common/Title';

const StudentDashboard = () => {
    return (
        <div className=" flex items-center justify-center p-8 bgcolor">
            <div className="max-w-4xl w-full h-full overflow-auto shadow-lg rounded-2xl">
                {/* Dashboard Title */}
                <div className="p-6 text-center bg-gray-800 text-white">
                    <Title text="Student Dashboard" color="white" />
                    <p className="text-gray-100 mt-2">
                        Explore your opportunities as a student by managing proposals, gaining credits, collaborating with mentors, and expanding your knowledge.
                    </p>
                </div>

                {/* Dashboard Sections */}
                <div className="p-8 space-y-8">
                    <DashboardSection
                        icon={<FiFilePlus className="text-4xl" />}
                        title="Add New Proposal"
                        description="As a student or mentor, you can submit new proposals to introduce innovative ideas, research topics, or improvements in existing systems. Each proposal undergoes a structured review process, ensuring the best ideas get recognized and supported. Proposals can range from technical research and software development to social initiatives and academic collaborations. Get started by drafting a clear and well-defined proposal!"
                        bgColor="bg-blue-500"
                    />
                    <DashboardSection
                        icon={<FiUserCheck className="text-4xl" />}
                        title="Collaborate in Project"
                        description="Browse through a variety of proposals submitted by students and mentors. Find projects that match your skills and interests, and apply to join teams working on meaningful research and development. Collaborating on a proposal gives you the opportunity to gain hands-on experience, work in multidisciplinary teams, and contribute to groundbreaking initiatives. Don't miss the chance to be part of something impactful!"
                        bgColor="bg-green-500"
                    />
                    <DashboardSection
                        icon={<FiStar className="text-4xl" />}
                        title="Gain Credits"
                        description="Earn credits for every successful project you complete. These credits serve as a recognition of your contributions and can be redeemed for academic benefits, certifications, and professional development programs. Building a strong portfolio through completed proposals enhances your credibility and prepares you for future academic or career advancements. Stay engaged, complete projects, and make a difference!"
                        bgColor="bg-yellow-500"
                    />
                </div>
            </div>
        </div>

    );
};

/* Dashboard Section Component */
const DashboardSection = ({ icon, title, description, bgColor }) => {
    return (
        <section className={`p-6 rounded-2xl shadow-md text-white flex flex-col items-center ${bgColor}`}>
            <div className="mb-4">{icon}</div>
            <Title text={title} color="white" />
            <p className="text-sm text-center max-w-lg">{description}</p>
        </section>
    );
};

export default StudentDashboard;
