import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex p-5 text-white justify-between bg-[#5C5D5E] lg:text-2xl relative items-center '>
            <h2 className='text-2xl font-semibold'>Course Crackers project</h2>

            <div className={`flex flex-col lg:flex-row lg:block bg-[#5C5D5E]  absolute lg:static justify-start  right-0 top-20 z-10 ${open ? "hidden" : "block"
                }`}>
                <Link className='hover:bg-purple-500 rounded hover:text-bold p-2 mx-8 ' to='/home'>Home</Link>
                <Link className='hover:bg-purple-500 rounded hover:text-bold p-2 mx-8' to='/rechart'>Rechart</Link>
                <Link className='hover:bg-purple-500 rounded hover:text-bold p-2 mx-8' to='/blog'>Blog</Link>
            </div>

            <div onClick={() => setOpen(!open)}>
                {open ? (
                    <Bars3Icon className="h-6 w-6 text-[#F7F7F7] lg:hidden block" />
                ) : (
                    <XMarkIcon className="h-6 w-6 text-[#F7F7F7] lg:hidden block" />
                )}
            </div>

        </div>
    );
};

export default Header;