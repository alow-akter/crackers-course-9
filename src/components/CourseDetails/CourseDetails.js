import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const CourseDetails = () => {
    const course = useLoaderData()
    const data = course.data.questions
    console.log(course)


    return (
        <div>
            <h1 className='text-3xl text-center mt-8 underline'>Quiz for {course.data.name}</h1>
            {
                data.map(quiz => <Quiz quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default CourseDetails;