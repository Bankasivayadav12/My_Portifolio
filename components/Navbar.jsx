"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-7 md:px-16 lg:px-32 transition-all duration-300 pt-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-gray-900 hover:text-blue-600 transition">
          BANKA SIVA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="relative text-gray-900 hover:text-blue-600 transition group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/About1" className="relative text-gray-900 hover:text-blue-600 transition group">
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/Project1" className="relative text-gray-900 hover:text-blue-600 transition group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/Services1" className="relative text-gray-900 hover:text-blue-600 transition group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/Contactus" className="relative text-gray-900 hover:text-blue-600 transition group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-900 focus:outline-none">
          {isMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="/about" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>
          About Me
        </Link>
        <Link href="/projects" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>
          Projects
        </Link>
        <Link href="/services" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link href="/contact" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>

        <button className="absolute top-6 right-6 text-gray-900" onClick={toggleMenu}>
          <FiX className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
