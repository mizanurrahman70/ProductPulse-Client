import React from 'react';
import Navber from '../Home/Home/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div >
          <div className='container mx-auto'>
          <div>
                <Navber></Navber>
            </div>
            <div className='min-h-[calc(100vh-274px)]'>
                <Outlet></Outlet>
            </div>

          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;