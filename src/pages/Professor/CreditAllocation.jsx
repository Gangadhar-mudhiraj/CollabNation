// CreditAllocation.js
import React, { useState } from 'react';

const CreditAllocation = () => {
    const [credits, setCredits] = useState(0);

    const handleChange = (e) => setCredits(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Credits Allocated: ${credits}`);
    };

    return (
        <div>
            <h2>Credit Allocation</h2>
            <form onSubmit={handleSubmit}>
                <input type='number' placeholder='Credits' value={credits} onChange={handleChange} required />
                <button type='submit'>Allocate</button>
            </form>
        </div>
    );
};

export default CreditAllocation;
