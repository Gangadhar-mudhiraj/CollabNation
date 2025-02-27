// EmailVerification.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const navigate = useNavigate();

    const handleVerification = () => {
        alert('Email Verified!');
        navigate('/login');
    };

    return (
        <div>
            <h2>Email Verification</h2>
            <p>Please check your email for a verification link.</p>
            <button onClick={handleVerification}>I have verified</button>
        </div>
    );
};

export default EmailVerification;
