import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Featured from '../Featured/Featured';
import Tranding from '../Trinding Product/Tranding';
import DiscountPayment from './Discount Payment/DiscountPayment';
import useAuth from '../../Hooks/useAuth';


const Home = () => {
   
    return (
        <div>
          <Banner></Banner>
          <Featured></Featured>
          <Tranding></Tranding>
         <DiscountPayment></DiscountPayment>
         
       
        </div>
    );
};

export default Home;