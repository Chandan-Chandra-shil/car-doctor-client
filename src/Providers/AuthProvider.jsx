import { createContext, useState } from "react";
import app from "../firebase/firebase.Config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const  AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const createUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    logIn

}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;