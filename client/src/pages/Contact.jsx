import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Contact");
  }, [currentPage]);

  return <div>Contact</div>;
}
