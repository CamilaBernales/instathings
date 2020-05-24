import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

function useAuth() {

const [userAuth, setUserAuth] = useState(null);

useEffect(()=>{
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {

        if(user){
            setUserAuth(user);
        }else{
            setUserAuth(null);
        }
    });
    return () => unsuscribe();
},[]);
return userAuth;

}

export default useAuth;