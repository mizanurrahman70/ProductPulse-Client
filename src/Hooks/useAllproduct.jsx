import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllproduct = () => {
    const axiosPublic=useAxiosPublic()
   const {data:product=[],refetch}=useQuery({
    queryKey:['product'],
    queryFn:async()=>{
        const res=await axiosPublic('/product')
        return res.data
    }
   })
   return [product,refetch]
};

export default useAllproduct;