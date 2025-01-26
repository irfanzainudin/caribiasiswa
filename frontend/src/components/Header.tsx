import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#DCE9F9]">
      <div className="mx-auto px-4 sm:px-20 flex w-full items-center justify-between py-4">
        {/* Title */}
        <div className="text-lg font-bold">Cari Biasiswa</div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-xl">✖</span> // Close icon
            ) : (
              <span className="text-xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-sm">Sign In</div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Sign Up
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      {menuOpen && (
        <div className="sm:hidden px-4 py-2 space-y-2 bg-[#DCE9F9]">
          <div className="text-center text-sm">Sign In</div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
