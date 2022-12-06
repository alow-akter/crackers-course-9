import React from 'react';
import ListCart from '../ListCart/ListCart';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { options, correctAnswer, question } = quiz;
    // console.log(quiz)
    const notify = (selectedAnswer) => toast(selectedAnswer);
    const handleRightWrongAns = (text) => {
        if (text === correctAnswer) {
            toast.success('Correct Answer!')
        }
        else {
            toast.error('Wrong Answer!')
        }

    }

    return (
        <div className='w-10/12 mx-auto'>

            <div className='bg-[#606162] mt-16 p-10 rounded'>
                <div className='flex justify-between'>
                    <h1 className='lg:text-2xl text-xl'>{question}</h1>
                    <button onClick={() => notify(correctAnswer)} ><EyeIcon className="h-6 w-10 text-white" /></button>
                    <ToastContainer />
                </div>
                <div className='grid lg:grid-cols-2 gap-16 p-10'>
                    {
                        options.map(option => <ListCart optionText={option}
                            handleRightWrongAns={handleRightWrongAns}></ListCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Quiz;

