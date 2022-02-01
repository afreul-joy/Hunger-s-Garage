import { useState } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut , onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({}) 
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
  
    // Google Sign
    const signInUsingGoogle = ()=>{
      return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
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
        setLoading(false)
    }); 
    return () => unsubscribed;

}, []);
  
      return{user,signInUsingGoogle, logOut}
  }

export default useFirebase;