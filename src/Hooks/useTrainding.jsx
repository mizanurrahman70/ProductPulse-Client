import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const useTrainding = () => {
    const axiosPublic=useAxiosPublic()
    const {data:product=[],refetch}=useQuery({
     queryKey:['tranding'],
     queryFn:async()=>{
         const res=await axiosPublic('/tranding-data')
         return res.data
     }
    })
    return [product,refetch]
};

export default useTrainding;