import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import image from '../Image/top-view-tablet-with-pink-stationery.jpg'
const Home = () => {
    const courses = useLoaderData()
    const data = courses.data;
    console.log(courses)
    return (
        <div>
            <div className='mt-5'>
                <div className='bg-gradient-to-tr from-slate-500 to-slate-700 h-96 w-full relative '>
                    <img className='w-full h-full object-cover absolute mix-blend-overlay' src={image} alt="" />
                    <div className='lg:p-28'>
                        <h1 className='text-3xl font-medium text-white pt-28'>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. </h1>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-20 w-10/12 mx-auto'>
                {
                    data.map(course => <Course key={course.id} course={course} ></Course>)
                }
            </div>
        </div>

    );
};

export default Home;