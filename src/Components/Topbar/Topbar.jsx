import React, { useState, useEffect } from "react";
import "./Topbar.css";
import Brightness from "../Brightness/Brightness";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Topbar() {
  const [fontSize, setFontSize] = useState(16); // Default font size in pixel

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prevSize) => (prevSize < 18 ? prevSize + 1 : prevSize));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 14 ? prevSize - 1 : prevSize)); // Prevent font size from getting too small
  };

  const resetFontSize = () => {
    setFontSize(16); // Reset to default font size
  };

  return (
    <>
      <div className="topbar">
        {/* <Brightness /> */}
        <ThemeToggle />
        <button title="FontSizeDec" onClick={decreaseFontSize}>A-</button>
        <button title="FontSizeRestore" onClick={resetFontSize}>A</button>
        <button title="FontSizeInc" onClick={increaseFontSize}>A+</button>
      </div>
    </>
  );
}

export default Topbar;
