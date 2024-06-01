import React from 'react';
import { BiDownArrow, BiUpArrow, BiUpvote } from "react-icons/bi";
import TitleSection from '../../Components/TitleSection';
import ProductDetals from '../../Pages/PRODUCT DETAILS/ProductDetals';
const Featured = () => {
    return (
        <>
        <TitleSection heading={'Featured'} subHeading={'New Tacnology'}></TitleSection>
        <div className='flex bg-zinc-300   rounded-xl gap-5 p-5 w-1/2'>
            <div>
                <img src="https://ph-files.imgix.net/8483bc6a-0974-43e0-a188-41ff7214606b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1" alt="" />
            </div>
            <div>
                <h1>MaxFocus: Link Preview — Preview links without leaving your current page</h1>
                <h1 className='space-x-5'><span>around</span><span>world<span>Preview</span></span></h1>
            </div>
            <div className='w-14  border-[#FF6600]  text-center'>
                <div>
                <h1>< BiUpArrow  className='mx-auto text-2xl'/></h1>
                <p>34</p>
                </div>
                <div>
                <h1>< BiDownArrow  className='mx-auto text-2xl'/></h1>
                <p>34</p>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Featured;