import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = () => {
  const [user, setUser] = useState({
    name: "Jhankar",
    email: "xyz@gmail.com",
  });

  const authInfo = {
    user,
    setUser
  }

  return <AuthContext.Provider value={authInfo} ></AuthContext.Provider>;
};

export default AuthProvider;
