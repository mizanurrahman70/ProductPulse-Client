import React from 'react';
import { BiUpvote } from 'react-icons/bi';

const ProductCard = ({img,title,tag}) => {
    return (
        <div className='flex bg-zinc-300   rounded-xl gap-5 p-5 w-1/2'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
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
    );
};

export default ProductCard;