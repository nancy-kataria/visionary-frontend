import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  // State to control the menu visibility
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef(); // Ref for detecting outside clicks

  // Toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle closing the slider when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sliderRef]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Logo</a>
      </div>

      <div
        ref={sliderRef}
        className={`menu ${isOpen ? "active" : ""}`}
      >
        <a href="#"> 
            <i className="fas fa-user"></i>Nancy
        </a>
        <a href="#">
        <i className="fas fa-cog"></i> Settings
        </a>
      </div>

      <div className={`ham-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
