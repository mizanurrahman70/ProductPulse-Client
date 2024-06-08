import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from '../../Hooks/useAdmin';

const VerifayAdmin = ({children}) => {
    const { user, loading } =useAuth();
    const [isAdmin, isAdminLoading,isModerator] =useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isModerator || isAdmin) {
        return children;
    }

  

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default VerifayAdmin;