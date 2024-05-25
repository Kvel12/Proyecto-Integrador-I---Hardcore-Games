import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-connfig";
import { GoogleAuthProvider, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { Await } from "react-router-dom";
import { sign } from "three/examples/jsm/nodes/Nodes.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creating auth context");
    return;
  }
  return context;
};

export function AuthProvider({ children }) {
  const [userLoged, setUserLoged] = useState(null);

  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      !currentUser ? setUserLoged(null) : setUserLoged(currentUser);
    });
    return () => suscribed();
  }, []);

  const loginWithGoogle = async () => {
    try{
      const Provider= new GoogleAuthProvider();
      const res = await signInWithPopup(auth,Provider);
      return{success:true, user: res.user};

    }catch(error){
        return { success:false, error:error};
    }
  }

const logout = async ()=>{
    try{
        await signOut(auth)
        return { success:true}
    }catch (error) {
        return { success:false, error:error}
    }
}

  return (
    <authContext.Provider value={{ userLoged ,logout, loginWithGoogle}}>
      {children}
    </authContext.Provider>
  );
}

























