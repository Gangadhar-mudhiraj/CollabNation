import React, { useState, useEffect } from 'react';
import { SuccessNotify, FailureNotify } from '../../components/common/Notify';

const ProposalList = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        // Fetch proposals from API or mock data
        const fetchProposals = async () => {
            try {
                // Example: Replace with actual API call
                const data = [
                    { id: 1, title: 'AI-Based Traffic Management', startDate: '2025-03-20', endDate: '2025-04-10', status: 'Pending' },
                    { id: 2, title: 'Smart Waste Segregation System', startDate: '2025-03-25', endDate: '2025-04-15', status: 'Pending' },
                    { id: 3, title: 'Blockchain for Student Records', startDate: '2025-04-05', endDate: '2025-04-20', status: 'Pending' },
                ];
                setProposals(data);
            } catch (error) {
                FailureNotify('Failed to fetch proposals');
            }
        };

        fetchProposals();
    }, []);

    // Accept Proposal
    const handleAccept = (id) => {
        setProposals((prev) =>
            prev.map((proposal) =>
                proposal.id === id ? { ...proposal, status: 'Accepted' } : proposal
            )
        );
        SuccessNotify('Proposal accepted successfully.');
    };

    // Reject Proposal
    const handleReject = (id) => {
        setProposals((prev) =>
            prev.map((proposal) =>
                proposal.id === id ? { ...proposal, status: 'Rejected' } : proposal
            )
        );
        FailureNotify('Proposal rejected.');
    };

    return (
        <div className="min-h-screen bgcolor p-6 flex items-center justify-center">
            <div className="w-full max-w-6xl bg-gray-800 shadow-lg rounded-2xl p-8 space-y-10">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-gray-100 text-center mb-8">
                    Proposal List
                </h2>

                {/* Proposals List */}
                {proposals.length > 0 ? (
                    <div className="space-y-8">
                        {proposals.map((proposal) => (
                            <div
                                key={proposal.id}
                                className="bg-gray-600 border border-gray-600 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                            >
                                {/* Proposal Details */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl font-medium text-gray-200">
                                        {proposal.title}
                                    </h3>
                                    <p className="text-gray-200">
                                        Start Date: <span className="font-medium">{proposal.startDate}</span> |
                                        End Date: <span className="font-medium">{proposal.endDate}</span>
                                    </p>
                                    <p
                                        className={`text-sm font-semibold ${proposal.status === 'Pending'
                                            ? 'text-yellow-500'
                                            : proposal.status === 'Accepted'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                            }`}
                                    >
                                        Status: {proposal.status}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                {proposal.status === 'Pending' && (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleAccept(proposal.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(proposal.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">No proposals submitted yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProposalList;
