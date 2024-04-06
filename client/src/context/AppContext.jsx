import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
}
