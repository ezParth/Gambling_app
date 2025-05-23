import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface LoginContextType {
    points: number;
    setPoints: Dispatch<SetStateAction<number>>;
}

const defaultValue: LoginContextType = {
    points: 0,
    setPoints: () => {},
};

const PointsContext = createContext<LoginContextType>(defaultValue);

interface LoginProviderProps {
  children: ReactNode;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [points, setPoints] = useState<number>(0);

  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export { LoginProvider, PointsContext };
