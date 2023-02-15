import { createContext } from "react";
import { theame } from "./theme";

type TheameCoontextProviderProps = {
  children: React.ReactNode;
};

export const TheameContext = createContext(theame);

const TheameCoontextProvider = ({ children }: TheameCoontextProviderProps) => {
  return <TheameContext.Provider value={theame}>{children}</TheameContext.Provider>;
};

export default TheameCoontextProvider 