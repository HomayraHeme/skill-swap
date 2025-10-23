import React, { useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);


    };
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

            .then(res => {
                setUser({
                    name: res.user.displayName,
                    email: res.user.email,
                    uid: res.user.uid,
                    photoURL: res.user.photoURL
                });
                setLoading(false);
                return res;

            });
    }


    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

            .then(res => {
                setUser({
                    name: res.user.displayName,
                    email: res.user.email,
                    uid: res.user.uid,
                    photoURL: res.user.photoURL
                });
                setLoading(false);
                return res;
            });
    };



    const logout = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {

                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle,

    };


    return (
        <div>
            <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;