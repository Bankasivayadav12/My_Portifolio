"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative flex flex-col md:flex-row justify-between px-6 md:px-16 lg:px-32 gap-10 py-14">
        
        {/* About Me Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">About Me</h2>
          <p className="text-sm text-gray-300">
            I'm a passionate web developer & designer, crafting intuitive and modern web experiences. 
            Let's build something amazing together!
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/About1" className="hover:text-blue-400 transition">About Me</Link></li>
            <li><Link href="/Project1" className="hover:text-blue-400 transition">Projects</Link></li>
            <li><Link href="/Services1" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link href="/Contactus" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
          <p className="text-sm">📍 India,Hydrebad.</p>
          <p className="text-sm">📞 +91 6304231562</p>
          <p className="text-sm">✉️ bankasiva2002@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            
           
            <Link href="https://www.linkedin.com/in/banka-siva-a82479251" className="text-gray-300 hover:text-blue-400 transition"><FaLinkedinIn size={20} /></Link>
            <Link href="https://github.com/Bankasivayadav12" className="text-gray-300 hover:text-blue-400 transition"><FaGithub size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="relative py-4 text-center text-xs md:text-sm bg-gray-800">
        © 2025 My Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
