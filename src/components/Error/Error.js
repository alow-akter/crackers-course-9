import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='m-40 p-20  bg-teal-200'>
            <h1 className='text-7xl font-extrabold text-red-600'>Oops!!!</h1>
            <h2 className='font-semibold mt-10 text-2xl text-red-700'>404- PAGE NOT FOUND</h2>
            <p>The page are looking for might have been removed had is it's name changed or is temporarily unavailable.
            </p>
            <Link to='/home'><button className='px-6 py-2 bg-fuchsia-700 text-white font-bold rounded-md hover:bg-[#252525] mt-8'>Back To Home</button></Link>
        </div>
    );
};

export default Error;