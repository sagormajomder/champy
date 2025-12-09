import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import auth from './../firebase/firebase.config';

const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);

  // User Register
  function registerUser(email, password) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // User Signin
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(updatedInfo) {
    return updateProfile(auth.currentUser, updatedInfo);
  }

  // Google signIn
  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }

  // User SignOUt
  function signOutUser() {
    return signOut(auth);
  }

  // Auth Observer
  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext
      value={{
        registerUser,
        signInUser,
        updateUserProfile,
        googleSignIn,
        signOutUser,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AuthContext>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === null)
    throw new Error('AuthContext was used outside of Auth Provider');

  return context;
}

export { AuthProvider, useAuth };
