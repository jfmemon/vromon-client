import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hotelDetails, setHotelDetails] = useState(null);
    const [hotelServiceDetails, setHotelServiceDetails] = useState(null);
    const [busServiceDetails, setBusServiceDetails] = useState(null);
    const [flightServiceDetails, setFlightServiceDetails] = useState(null);

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {

                axios.post('https://vromon-server-roan.vercel.app/jwt', { email: currentUser?.email })

                    .then((data) => {
                        console.log(data)
                        localStorage.setItem("access-token", data.data.token)
                    })
            }

            else {
                localStorage.removeItem("access-token")
            }


        })
        return () => { unsubscribe() }
    }, [])

    const authInfo = {
        auth,
        user,
        loading,
        login,
        signup,
        updateUserProfile,
        emailVerify,
        logout,
        hotelDetails,
        setHotelDetails,
        hotelServiceDetails,
        setHotelServiceDetails,
        busServiceDetails,
        setBusServiceDetails,
        flightServiceDetails,
        setFlightServiceDetails
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;