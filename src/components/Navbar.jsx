import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-black to-gray-900 text-white px-6 md:px-16 py-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-lg md:text-xl font-semibold text-textColor">Faizan Shah</h1>

                {/* Hamburger Menu - Visible on Small Screens */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-textColor focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-sm md:text-md font-medium ">
                    <li>
                        <a href="#home" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about-me" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#work-experience" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#certifications" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Certificates
                        </a>
                    </li>
                    <li>
                        <a href="#blogs" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a href="#contact-info" className="text-textColor hover:text-hoverColor cursor-pointer font-family text-xl">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Navigation - Visible when `isOpen` is true */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 py-4">
                    <li>
                        <a
                            href="#home"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about-me"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#work-experience"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#certifications"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Certificates
                        </a>
                    </li>
                    <li>
                        <a
                            href="#blogs"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact-info"
                            className="text-textColor hover:text-hoverColor cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
