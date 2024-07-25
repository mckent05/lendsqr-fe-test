import { createContext, useContext } from "react";

export const navContextProvider = createContext<boolean | null>(null);

export const useNavContext = ():boolean => {
  const useNavContext = useContext(navContextProvider);
  if (useNavContext === null) {
    throw new Error("Provide a value for the create context");
  }
  return useNavContext;
};
