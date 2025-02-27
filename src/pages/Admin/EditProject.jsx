import React from 'react';
import { useParams } from 'react-router-dom';

const EditProject = () => {
    const { id } = useParams();

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold mb-4'>Edit Project {id}</h1>
            <form className='space-y-4'>
                <input type='text' placeholder='Project Title' className='border p-2 w-full' />
                <textarea placeholder='Project Description' className='border p-2 w-full'></textarea>
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>Save Changes</button>
            </form>
        </div>
    );
};

export default EditProject;
