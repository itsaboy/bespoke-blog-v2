import { useEffect, useState, useContext } from "react";
import ContactPic from "../components/Contact/ContactPic";
import ContactContent from "../components/Contact/ContactContent";
import { AppContext } from "../context/AppContext";

export default function Contact() {

  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Contact");
  }, [currentPage]);

  return (
    <div className="relative bg-transparent flex justify-center">
      {/* <ContactPic /> */}
      <ContactContent />
    </div>
  );
}
