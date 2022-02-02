import { useState } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({}) 
    const [authError,setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    //--------- Google SignIn------------
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = ()=>{
      return signInWithPopup(auth, googleProvider)
    }
    //--------------Register User-----------------
    const registerUser = (email, password)=>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError("")  
        })
        .catch((error) => {
          setAuthError(error.message)
        })
        .finally(()=>isLoading(false));
    }
    //----------------Login user----------------
    const loginUser = (email, password) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError("")  
        })
        .catch((error) => {    
          setAuthError(error.message)    
        })
        .finally(()=>isLoading(false));
    }
    //---------- LogOut-----------------
    const logOut = () =>{
      signOut(auth)
      .then(() => {
        
      }).catch((error) => {
        
      })
      .finally(()=>isLoading(false));
    }
  
  //--------- observer whether user auth state changed or not-----------
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setIsLoading(false);
    }); 
    return () => unsubscribed;

}, []);
  
      return{user,signInUsingGoogle, logOut,registerUser,loginUser,isLoading,authError}
  }

export default useFirebase; 