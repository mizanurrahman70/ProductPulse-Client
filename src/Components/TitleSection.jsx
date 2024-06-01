import React from 'react';

const TitleSection = ({heading,subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center m-y-10 mb-8 mt-8'>
            <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
            <h1 className='text-3xl border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default TitleSection;