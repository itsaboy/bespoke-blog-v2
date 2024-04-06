import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <AppContext.Provider value={{ open, setOpen, active, setActive }}>
      {children}
    </AppContext.Provider>
  );
}
