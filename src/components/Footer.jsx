import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-gray-900 text-white px-6 md:px-16 py-4 shadow-md w-full text-center">
            <p className="text-sm opacity-70">
                &copy; {new Date().getFullYear()} Faizan Shah. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
