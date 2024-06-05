import React, { createContext, useEffect, useState } from "react";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
import auth from "../firebaseConfig";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //   user create
  const userSinup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  // user Login
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  //    google singup
  const google = new GoogleAuthProvider();
  const gooogleSingUp = () => {
    setLoading(true);

    return signInWithPopup(auth, google);
  };
  // loge Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onOth Change
  const axiosPublic=useAxiosPublic()

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (carrenUser) => {
      const userEmail = carrenUser?.email;

      setLoading(false);
   
      console.log("current user", carrenUser);
      const users = {
        userName: carrenUser?.displayName,
        user_email: carrenUser?.email,
        user_photo: carrenUser?.photoURL,
        role:'user'
      };
      axiosPublic.post('users',users)
      .then(res=>{
        console.log(res.data)
      })
      console.log(users)
      setUser(carrenUser);
      //  user use token
      if (carrenUser) {
        // get token and store client
        const userInfo = { email: carrenUser.email };
        axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
    }
    else {
      
        localStorage.removeItem('access-token');
        setLoading(false);
    }
    });
   
    return () => {
      unsubsribe();
    };
  }, []);
  // user profile
  const setUserInfo = (name, imgurl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgurl,
    })
      .then(() => {})
      .catch((error) => {
        console.error("Error updating profile:", error);
        throw error;
      });
  };

  const AuthInfo = {
    userSinup,
    UserLogin,
    gooogleSingUp,

    user,
    setUser,
    logOut,
    setUserInfo,
    loading,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
