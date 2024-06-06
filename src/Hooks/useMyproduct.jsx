import React from 'react';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMyproduct = () => {
    const {user}=useAuth()
    const axiosPublic=useAxiosPublic()
   const {data:product=[],refetch}=useQuery({
    queryKey:['product,',user?.email],
    queryFn:async()=>{
        const res=await axiosPublic(`/product/${user?.email}`)
        return res.data
    }
   })
   return [product,refetch]
};

export default useMyproduct;