import React from 'react';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCards = () => {
    const {user}=useAuth()
    const axiosPublic=useAxiosPublic()
   const {data:cart=[],refetch}=useQuery({
    queryKey:['card,',user?.email],
    queryFn:async()=>{
        const res=await axiosPublic(`/product?email=${user?.email}`)
        return res.data
    }
   })
   return [cart,refetch]
};


export default useCards;