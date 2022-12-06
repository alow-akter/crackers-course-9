import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, logo, total } = course
    return (
        <div className=' borer border-2 border-indigo-200 border-solid rounded gap-10 w-[300px] bg-[#A1B4F2] shadow-lg shadow-indigo-600'>
            <img className='w-[300px]' src={logo} alt="" />
            <div>
                <h2 className='text-3xl font-semibold text-orange-500'>{name}</h2>
                <h4>Total: {total}</h4>
            </div>
            <Link to={`/course/${id}`}>
                <button className='px-6 py-2 bg-fuchsia-700 text-white font-bold rounded-md hover:bg-[#252525]'>Our Course</button>
            </Link>
        </div>
    );
};

export default Course;