import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { firebaseApp } from './firebaseApp';

const firebaseAuth = getAuth(firebaseApp);

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (user) => {
    if (user) {
      setLoading(true);
      var formattedUser = formatAuthUser(user);
      setAuthUser(formattedUser);
      setLoading(false);
    } else {
      setAuthUser(formattedUser);
    }
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const logIn = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  const logOut = () =>
    signOut(firebaseAuth)
      .then(clear)
      .catch((error) => {
        // An error happened.
      });

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const formattedUser = formatAuthUser(user);
        setAuthUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  // listen for Firebase state change
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, authStateChanged);
    return () => null;
  }, []);

  return {
    authUser,
    loading,
    logIn,
    logOut,
    createUser,
  };
}

export { useFirebaseAuth };
