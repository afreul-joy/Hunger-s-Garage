import { useState } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({}) 
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
  
    const signInUsingGoogle = ()=>{
      return signInWithPopup(auth, googleProvider)
    }
    
    const signOutUsingGoogle = () =>{
      signOut(auth)
      .then(() => {
          setUser({})
          setSuccess('Signed-Out successfully!');
        })
        .catch(err => {
          setError(err.code);
          setSuccess('');
      })
    }
  
  //   observer whether user auth state changed or not
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
    }); 
    return () => unsubscribed;

}, []);
  
      return{user,signInUsingGoogle,signOutUsingGoogle}
  }

export default useFirebase;