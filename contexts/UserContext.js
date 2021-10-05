import { createContext, useContext } from 'react';
import useFirebaseAuth from '../firebase/firebaseAuth';

const userContext = createContext({
  authUser: null,
  loading: true,
  logIn: async () => {},
  logOut: async () => {},
  createUser: async () => {},
});

export function UserProvider({ children }) {
  // todo:
  const auth = useFirebaseAuth();
  return <userContext.Provider value={auth}>{children}</userContext.Provider>;
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(userContext);
