import React, { useState } from "react";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiJavascript, SiPython, SiReact, SiC } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import withSectionLayout from "../hoc/withSectionLayout";

const Skills = () => {
    const [showAll, setShowAll] = useState(false);

    // Cloud Computing Skills 
    const cloudComputingSkills = [
        "EC2", "ECS", "VPC", "Lambda", "S3", "ApiGateway", "Cloudwatch", "Route53",
        "Cloudformation", "RDS", "Load Balancers and more"
    ];
    const visibleCloudSkills = showAll ? cloudComputingSkills : cloudComputingSkills.slice(0, 8);

    // Container Tools 
    const containerTools = ["Kubernetes", "Docker", "Docker Compose", "AWS ECS", "Docker Swarm"];
    const visibleContainerTools = showAll ? containerTools : containerTools.slice(0, 3);

    // Programming Languages 
    const programmingLanguages = [
        { name: "NodeJS", icon: <FaNodeJs className="text-green-400 text-xl" />, color: "bg-green-500" },
        { name: "ReactJS", icon: <SiReact className="text-blue-400 text-xl" />, color: "bg-blue-500" },
        { name: "Python", icon: <SiPython className="text-indigo-400 text-xl" />, color: "bg-indigo-700" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" />, color: "bg-yellow-400" },
        { name: "C Language", icon: <SiC className="text-blue-400 text-xl" />, color: "bg-blue-500" },
        { name: "C++", icon: <SiC className="text-gray-700 text-xl" />, color: "bg-gray-700" },
        { name: "Java", icon: <SiC className="text-orange-600 text-xl" />, color: "bg-orange-600" }
    ];
    const visibleProgrammingLanguages = showAll ? programmingLanguages : programmingLanguages.slice(0, 5);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel - Cloud Computing & Tools */}
            <section className="space-y-6 col-span-3 lg:col-span-1">
                <div className="border border-gray-800 p-6 rounded-lg">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <FaAws className="text-yellow-500 text-xl" /> Cloud Computing <span className="text-gray-400">AWS</span>
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                        {visibleCloudSkills.map((item, index) => (
                            <li key={index} className="ml-4 list-disc">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <FaDocker className="text-blue-500 text-xl" /> Container Tools
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                        {visibleContainerTools.map((item, index) => (
                            <li key={index} className="ml-4 list-disc">{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Right Panel - Programming Languages */}
            <div className="border border-gray-800 p-6 rounded-lg md:col-span-2 col-span-3">
                <h3 className="text-white font-semibold text-center mb-4">Programming Languages</h3>
                {visibleProgrammingLanguages.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2 text-white">
                                {skill.icon}
                                {skill.name}
                            </div>
                        </div>
                        <div className="w-full md:h-8 h-4  bg-gray-700 rounded-full relative">
                            <div className={`${skill.color} md:h-8 h-4 rounded-full w-3/4 flex items-center justify-end px-2`}>
                                <span className="text-white md:font-semibold text-sm">Intermediate</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="col-span-3 flex justify-center">
                <button
                    className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "View More"}
                </button>
            </div>
        </div>
    );
};

export default withSectionLayout(Skills, 2);
