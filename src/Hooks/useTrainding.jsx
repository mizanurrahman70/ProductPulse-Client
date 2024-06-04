import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const useTrainding = () => {
    const axiosPublic=useAxiosPublic()
    const {data:product=[],refetch}=useQuery({
     queryKey:['feature'],
     queryFn:async()=>{
         const res=await axiosPublic('/feature-data')
         return res.data
     }
    })
    return [product,refetch]
};

export default useTrainding;