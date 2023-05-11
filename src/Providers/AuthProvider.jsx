import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.Config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const  AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const createUser = (email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    setLoading(true)
    signOut(auth)
   
     
  }

  useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log("current user hare", currentUser)
    setLoading(false)
    return ()=> {
     return unsubscribe()
    }
  })
},[])

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut

}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;