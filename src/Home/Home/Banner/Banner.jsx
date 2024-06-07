import React from 'react';
import banner1 from'../../../assets/banner/banner1.png'
import banner2 from'../../../assets/banner/banner2.png'
import banner3 from'../../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <div className="carousel w-full h-96 rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
    
          <img src={banner3} className="w-full" />
  
          <div className="absolute  md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="  space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 font-extrabold text-yellow-50">
          
              wellcome to <br /> my website
            </h1>      
            
          </div>
        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute  md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className=" md:w-1/3 space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 text-gray-600 font-extrabold">
          
              Holiday <br /> 20$ <br /> offer
            </h1>      
            
          </div>
        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute  md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className=" md:w- space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 font-extrabold text-gray-600">
          
              Eid <br /> 35% <br />
               Discount
            </h1>      
            
          </div>
        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;