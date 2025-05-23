import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: LoginContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const LoginContext = createContext<LoginContextType>(defaultValue);

interface LoginProviderProps {
  children: ReactNode;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
