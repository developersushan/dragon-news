import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../.././firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading]=useState(true)
const LoginProvider = (provider) =>{
    return signInWithPopup(auth,provider)
}
//create in with email and password
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
//sign in with email and password
const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    
}
//update Profile user name
const updateProfileUser = (profile)=>{
    return updateProfile(auth.currentUser , profile)
}
//email verification 
const verifyEmail = ()=>{
    return sendEmailVerification(auth.currentUser)
}
//sign out from
const logOut = ()=>{
    return signOut(auth)
}
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
        }
        setLoading(false)
    })
    return ()=>{
        return unSubscribe()
    }

 },[])
const authInfo={user ,loading, updateProfileUser,setLoading, LoginProvider,logOut,createUser ,verifyEmail,signIn} 
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;