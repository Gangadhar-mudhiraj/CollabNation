// TeamFormation.js
import React, { useState } from 'react';

const TeamFormation = () => {
    const [members, setMembers] = useState(['']);

    const handleChange = (index, value) => {
        const newMembers = [...members];
        newMembers[index] = value;
        setMembers(newMembers);
    };

    const addMember = () => setMembers([...members, '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Team Formed!');
    };

    return (
        <div>
            <h2>Team Formation</h2>
            <form onSubmit={handleSubmit}>
                {members.map((member, index) => (
                    <input key={index} type='text' placeholder='Team Member Name' value={member} onChange={(e) => handleChange(index, e.target.value)} required />
                ))}
                <button type='button' onClick={addMember}>Add Member</button>
                <button type='submit'>Form Team</button>
            </form>
        </div>
    );
};

export default TeamFormation;
