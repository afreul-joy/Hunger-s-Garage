import { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import {  useLocation, useNavigate } from 'react-router-dom';
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
     //------Privet Route & Navigate---------
     let location = useLocation();
     const navigate = useNavigate()
     const redirect_Url = location.state?.from || '/'
     console.log('came from',location.state?.from);

  const auth = getAuth();
  //--------- Google SignIn------------
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        // The signed-in user info.
        const user = result.user;
        // save user to Database
        saveUser(user.email, user.displayName, "PUT");

        navigate(redirect_Url)
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => isLoading(false));
  };
  //--------------Register User-----------------
  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        navigate(redirect_Url)
        // working with name
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to Database
        saveUser(email, name, "POST");
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => isLoading(false));
  };
  //----------------Login user----------------
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        console.log("hello");
        navigate(redirect_Url)
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => isLoading(false));
  };
  //---------- LogOut-----------------
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => isLoading(false));
  };
  //---------- Save User to Database-----------------
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://hungers-garage.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  //--------- observer whether user auth state changed or not-----------
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  //---------- Admin ---------------------
  useEffect(() => {
    fetch(`https://hungers-garage.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  }, [user.email]);

  return {
    user,
    signInUsingGoogle,
    logOut,
    registerUser,
    loginUser,
    isLoading,
    authError,
    admin
  };
};

export default useFirebase;
