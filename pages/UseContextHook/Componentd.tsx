import React, { createContext } from "react";
type ContextProviderProps = {
  children: React.ReactNode;
};
const User = {
  admin: {
    name: "ankit",
    email: "ankit@email.com",
  },
};
export const UserContext = React.createContext(User);
function UserContextProvider({ children }: ContextProviderProps) {
  return <UserContext.Provider value={User}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
