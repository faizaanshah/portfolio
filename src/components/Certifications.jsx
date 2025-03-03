import React, { useState } from "react";
import withSectionLayout from "../hoc/withSectionLayout";
import { FiExternalLink } from "react-icons/fi";
import { LiaCertificateSolid } from "react-icons/lia";
const certificationsData = [
  {
    title: "Amazon EKS Fundamentals",
    issuer: "Releaseworks Academy",
    issuedDate: "May 2023",
    provider: 'AWS',
    link: "https://www.releaseworksacademy.com/certificates/jclw2ranpl",
    tags: ["AWS CloudFormation", "Terraform", "Kubernetes", "Amazon EKS"],
  },
  {
    title: "AWS Cloud Practitioner Essentials (Second Edition)",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Feb 2020",
    provider: 'AWS',
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=QtFt-cZ9w0OigTJeMDULGw2",
    tags: ["AWS CloudFormation"],
  },
  {
    title: "Well-Architected Best Practices - Technical",
    issuer: "Releaseworks Academy",
    issuedDate: "May 2023",
    provider: 'AWS',
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=fkUnWSVyPkaVrGEG3xRY-Q2",
    tags: ["AWS", "Terraform", "AWS Lambda"],

  },
  {
    title: "AWS Cloud Economics",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "May 2023",
    provider: 'AWS',
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=41Vj5lR2TUGtQB3ZzAI4qA2",
    tags: ["AWS Lambda"],
  },
  {
    title: "AWS Technical Professional (Digital)",
    issuer: "Releaseworks Academy",
    issuedDate: "May 2023",
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=tTmjksU-_UuWoDNKpzkTyg2",
    tags: ["AWS CloudFormation", "AWS"],
  },
  {
    title: "Internet Of Things",
    issuer: "Khyber Pakhtunkhwa Information Technology Board (KPITB)",
    issuedDate: "May 2023",
    provider: 'IOT',
    link: "https://www.credly.com/badges/1b7b7b7b-7b7b-7b7b-7b7b-7b7b7b7b7b7b",
    tags: ["AWS", "C++", "C"],
  },
  {
    title: "AWS Solutions Training for Partners: Amazon Connect - Technical(Digital) ",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Nov 2019",
    provider: 'AWS',
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=DoatIbXBokmS4MEV_aLLtQ2",
    tags: ["AWS"],
  },
  {
    title: "AWS Solutions Training for Partners: Foundations - Technical(Digital) ",
    issuer: "Khyber Pakhtunkhwa  Board (KPITB)",
    issuedDate: "Nov 2019",
    provider: 'AWS',
    link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=s-7kAWEL_kuzokNyTiM4Zw2",
    tags: ["AWS"],
  },
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certificationsData : certificationsData.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCertifications.map((cert, index) => (
          <div key={index} className="border relative border-gray-800 p-5 rounded-lg  shadow-lg">
            <LiaCertificateSolid className="absolute text-2xl right-0 top-0 text-gray-400 mx-auto" />
            <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">{cert.provider}</span>
            <h3 className="text-white font-semibold mt-3 text-lg">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
            <p className="text-gray-500 text-xs mt-2">📅 Issued {cert.issuedDate}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {cert.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>

            {/* View Certificate Button */}
            <a href={cert.link} target="_blank" rel="noopener noreferrer">

              <button className="mt-4 text-sm flex flex-row  hover:cursor-pointer hover:text-blue-300 transition">
                <FiExternalLink /> <span className="ml-2">

                  View Certificate
                </span>
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
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

export default withSectionLayout(Certifications, 3);
