import React from "react";
import withSectionLayout from "../hoc/withSectionLayout";
import { LiaFileDownloadSolid } from "react-icons/lia";
import faizan from "../assets/faizan.png";
const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center">
            {/* Left Side - Text Content */}
            <div className="md:w-2/3 text-textColor">
                <h3 className="text-2xl font-bold">I'm Shah Faizan</h3>
                <p className="mt-4 text-grayColor leading-relaxed">
                    I'm a Senior Software Engineer with extensive experience in cloud computing and modern web technologies.
                    I specialize in AWS architecture, DevOps practices, and building scalable applications.
                </p>
                <p className="mt-2 text-grayColor leading-relaxed">
                    My expertise includes designing robust cloud solutions, implementing serverless architectures,
                    and optimizing web applications for scalability and performance.
                </p>
                <a href="https://faizaanshah.github.io/portfolio/images/cv.pdf" target="_blank" download="Faizan-Shah-Resume.pdf">
                    <button className="inline-flex item-center hover:cursor-pointer bg-white text-black font-semibold mt-5 px-6 py-2  rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300">
                        <LiaFileDownloadSolid className="w-5 h-5 mr-2 inline" /> Download CV
                    </button>
                </a>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                <img
                    src={faizan}// Placeholder Image
                    alt="Faizan Shah"
                    className="rounded-lg shadow-lg w-40 h-40 object-cover"
                />
            </div>
        </div>
    );
};

// Wrapping with HOC to Add Section Layout
export default withSectionLayout(AboutMe, 0);
// todo: add image