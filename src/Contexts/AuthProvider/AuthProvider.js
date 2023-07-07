import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signup = (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // const emailVerify = () => {
    //     return sendEmailVerification(auth.currentUser);
    // }
    // to get current user  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };

    }, []);

    const authInfo = {
        user,
        loading,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;