import React from 'react';

import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useAdmin = () => {
    const { user } = useAuth();
    console.log('admin userrrr',user)
    const axiosPublic=useAxiosPublic()

    const { data, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`);
            return res.data;
        },
    });

    const isAdmin = data?.admin;
    const isModerator = data?.moderator;

    return [isAdmin, isModerator, isAdminLoading];
};

export default useAdmin;