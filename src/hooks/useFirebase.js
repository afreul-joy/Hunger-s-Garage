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
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  //--------- Google SignIn------------
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
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
        // working with name
        const newUser = { email, displayName: name };
        setUser(newUser);
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
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    registerUser,
    loginUser,
    isLoading,
    authError,
  };
};

export default useFirebase;
