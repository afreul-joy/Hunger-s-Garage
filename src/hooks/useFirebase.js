import { useState } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut,updateProfile,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({}) 
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true)

    const auth = getAuth();
    //--------- Google SignIn------------
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = ()=>{
      return signInWithPopup(auth, googleProvider)
    }
    //--------------Register User-----------------
    const registerUser = (text,email, password)=>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          addUserName(text)
        })
        .catch((error) => {
        });
    }
    //-----------Update a user's profile------------
    const addUserName = (text)=> {
      updateProfile(auth.currentUser, {
        displayName: (text)
      })
      .then(() => {
      }).catch((error) => {        
      });
    }
    //----------------Login user----------------
    const loginUser = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {        
        });
    }
    //---------- LogOut-----------------
    const logOut = () =>{
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      });
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
        setLoading(false)
    }); 
    return () => unsubscribed;

}, []);
  
      return{user,addUserName,signInUsingGoogle, logOut,registerUser,loginUser}
  }

export default useFirebase;