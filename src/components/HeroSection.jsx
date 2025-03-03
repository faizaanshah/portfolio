import React from "react";
import { FiLinkedin } from "react-icons/fi";
import faizan from "../assets/faizan.png";
const HeroSection = () => {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-black to-gray-800 font-family text-textColor p-6 md:px-16"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly gap-10">
                {/* Left Content */}
                <div className=" flex-2 text-center md:text-left space-y-4">
                    <h1 className="md:text-5xl  text-3xl font-bold font-family">
                        Hello, I'm <span className="text-textColor font-family">Faizan Shah</span>
                    </h1>
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-100">
                        Senior Software Engineer
                    </h2>
                    <p className="text-grayColor flex flex-wrap gap-2 justify-center md:justify-start">
                        <span>• Software Engineer</span>
                        <span>• DevOps</span>
                        <span>• Blogging</span>
                    </p>
                    {/* LinkedIn Button */}
                    <a
                        href="https://linkedin.com/in/faizans801"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex item-center bg-white text-black font-semibold px-6 py-2 mt-4 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
                    >
                        <FiLinkedin className="w-5 h-5 mr-2 inline" /> Connect on LinkedIn
                    </a>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute top-4 left-4 w-full h-full bg-gray-800 rounded-lg shadow-lg"></div>
                    <img
                        src={faizan} /* Replace with actual image */
                        alt="Faizan Shah"
                        className="relative z-10 w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
// todo add image