import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        background: "rgba(255,255,255,0.75)",
        padding: "2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
      className="hidden"
    >
      <div className="md:hidden flex items-center absolute right-0">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-[70%] sm:w-[50%] bg-black rounded shadow-lg py-4 flex flex-col mr-2">
          <a
            href="#home"
            className="font-semibold  block px-4 py-2 text-white hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-semibold block px-4 py-2 text-white hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="block px-4 py-2 text-white font-semibold hover:text-gray-400"
          >
            Portfolio
          </a>
          <a
            href="#footer"
            className="block px-4 py-2 text-white font-semibold hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      )}
      <div className="hidden md:flex gap-8">
        <a href="#home" className="font-semibold 2xl:text-2xl">
          Home
        </a>
        <a href="#about" className="font-semibold 2xl:text-2xl">
          About
        </a>
        <a href="#portfolio" className="font-semibold 2xl:text-2xl">
          Portfolio
        </a>
        <a href="#footer" className="font-semibold 2xl:text-2xl">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
