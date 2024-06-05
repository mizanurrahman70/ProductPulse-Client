import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const useCoupons = () => {
    const axiosPublic=useAxiosPublic()
    const {data:coupons=[],refetch}=useQuery({
     queryKey:['feature'],
     queryFn:async()=>{
         const res=await axiosPublic('/coupons')
         return res.data
     }
    })
    return [coupons,refetch]
};

export default useCoupons;