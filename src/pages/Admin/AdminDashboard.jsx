import React from 'react';
import { FiClock, FiCheckCircle, FiEye, FiList } from 'react-icons/fi';
import Title from '../../components/common/Title';

const AdminDashboard = () => {
    return (
        <div className="flex items-center justify-center p-8 bgcolor">
            <div className="max-w-4xl w-full h-full overflow-auto shadow-lg rounded-2xl">
                {/* Dashboard Title */}
                <div className="p-6 text-center bg-gray-800 text-white">
                    <Title text="Admin Dashboard" color="white" />
                    <p className="text-gray-100 mt-2">
                        Manage proposals, open collaboration periods, and monitor student progress. Ensure smooth project execution and fair reviews.
                    </p>
                </div>

                {/* Dashboard Sections */}
                <div className="p-8 space-y-8">
                    <DashboardSection
                        icon={<FiClock className="text-4xl" />}
                        title="Open Proposal Period"
                        description="Set a 1-week proposal submission period every semester. Once opened, students and mentors can submit their project ideas. Monitor the submission window and adjust deadlines if necessary."
                        bgColor="bg-purple-500"
                    />
                    <DashboardSection
                        icon={<FiCheckCircle className="text-4xl" />}
                        title="Approve Collaborations"
                        description="After proposals are accepted, open a collaboration window where students and mentors can apply to join projects. Approve or reject team formation requests to ensure balanced teams."
                        bgColor="bg-blue-500"
                    />
                    <DashboardSection
                        icon={<FiEye className="text-4xl" />}
                        title="Monitor Progress"
                        description="Track the progress of ongoing projects. Identify potential issues early and provide support where needed. Review project completion reports and award credits to successful contributors."
                        bgColor="bg-green-500"
                    />
                    <DashboardSection
                        icon={<FiList className="text-4xl" />}
                        title="Define and Track Deliverables"
                        description="Set key deliverables for each accepted project. Monitor the completion of these deliverables and ensure they meet quality standards. Award credits and provide feedback after successful submission."
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

export default AdminDashboard;
