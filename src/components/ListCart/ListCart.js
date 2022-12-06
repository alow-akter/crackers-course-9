import React from 'react';

const ListCart = ({ optionText, handleRightWrongAns }) => {
    //console.log(p)
    return (
        <div className='bg-slate-200 duration-500 hover:bg-slate-800 hover:text-white p-6 rounded-lg'>
            <label>
                <input onClick={() => handleRightWrongAns(optionText)} type="radio" value={optionText} name="quiz" />
                {optionText}
            </label>
        </div>
    );
};

export default ListCart;