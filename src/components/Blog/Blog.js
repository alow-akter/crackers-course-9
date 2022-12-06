import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-20  font-semibold mt-20'>
                <div className=' borer border-2 border-indigo-200 border-solid rounded gap-10  bg-[#A8DCF1] shadow-lg shadow-indigo-600 p-10 '>
                    <h1 className='text-2xl'>What is purpose of react router ?</h1>
                    <p className='text-center mt-8'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                <div className=' borer border-2 border-indigo-200 border-solid rounded gap-10  bg-[#A8DCF1] shadow-lg shadow-indigo-600 p-10'>
                    <h1 className='text-2xl'>
                        How does context api works?</h1>
                    <p className='text-center mt-8' >The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className=' borer border-2 border-indigo-200 border-solid rounded gap-10  bg-[#A8DCF1] shadow-lg shadow-indigo-600 p-10'>
                    <h1 className='text-2xl'>
                        what is useRef in react ?
                    </h1>
                    <p className='text-center mt-8'> useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;