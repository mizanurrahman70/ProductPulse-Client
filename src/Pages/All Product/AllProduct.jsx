import React from 'react';
import useAllproduct from '../../Hooks/useAllproduct';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [product]=useAllproduct()
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {product.map((product)=><Link to={`/productdetails/${product._id}`}><div className="flex bg-zinc-300 w-full  rounded-xl gap-5 p-5 justify-around">
          <div>
            <img className='w-20 h-20'
              src={product.
                product_img}
              alt=""
            />
          </div>
          <div>
            <h1>{product.product_name}</h1>
            <h1 className="space-x-5">
              <span>around</span>
              <span>
                world<span>Preview</span>
              </span>
            </h1>
          </div>
          <div className="w-14  border-[#FF6600]  text-center">
            <div>
              <h1>
                <BiUpArrow className="mx-auto text-2xl" />
              </h1>
              <p>{product.Upvote}</p>
            </div>
            <div>
              <h1>
                <BiDownArrow className="mx-auto text-2xl" />
              </h1>
              <p>34</p>
            </div>
          </div>
        </div></Link>)}
        </div>
        </>
    );
};

export default AllProduct;