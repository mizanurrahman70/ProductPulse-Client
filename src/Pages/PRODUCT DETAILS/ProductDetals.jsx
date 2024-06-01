import React from "react";
import { BiFlag, BiUpArrow } from "react-icons/bi";

const ProductDetals = () => {
  return (
    <>
      <div className="flex bg-zinc-300   rounded-xl gap-5 p-5 w-3/5 mx-auto">
        <div>
          <img
            src="https://ph-files.imgix.net/8483bc6a-0974-43e0-a188-41ff7214606b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h1>
            MaxFocus: Link Preview — Preview links without leaving your current
            page
          </h1>
          <h1 className="space-x-5">
            <span>around</span>
            <span>
              world<span>Preview</span>
            </span>
          </h1>
          <p>
            Meet Eve, your trusted companion in navigating workplace stress. Eve
            is your dedicated AI-powered Stress Coach, combining the warmth of a
            close friend with the wisdom of an experienced life coach, always
            ready to listen and emphathize.
          </p>
          {/* <button className='w-32 h-14  bg-[#00BFA5]   rounded-lg flex pt-4  gap-1'>
                <h1 className='mx-auto'>Mark as Report</h1>
               
                </button> */}
          <button className="w-32 h-14 bg-[#FF4C4C]  rounded-lg flex pt-4  gap-1">
            <h1>
              <BiFlag className="mx-auto text-2xl" />
            </h1>
            <p className="">Report</p>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-32 h-14  bg-[#FF6600]  text-center rounded-lg flex pt-4 mx-auto gap-1">
            <h1>
              <BiUpArrow className="mx-auto text-2xl" />
            </h1>
            <p>Upvote</p>
            <p>34</p>
          </button>
          <button className="w-32 h-14  bg-[#00BFA5]  text-center rounded-lg flex pt-4 mx-auto gap-1">
            <h1 className="mx-auto">Revews</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetals;
