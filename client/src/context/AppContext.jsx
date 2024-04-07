import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <AppContext.Provider value={{ open, setOpen, currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}
