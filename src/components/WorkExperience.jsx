import React from 'react'
import withSectionLayout from '../hoc/withSectionLayout'

const WorkExperience = () => {
    const workExperience = [
        {
            "title": "DevOps Consultant",
            "company": "Tap Technologies",
            "location": "Remote",
            "startDate": "October 2023",
            "endDate": "Present",
            "description": [
                "Collaborate with developers to design, build and deploy scalable and reliable software systems",
                "Migrate existing dockerized infrastructure to Kubernetes utilizing Infrastructure as Code",
                "Manage and maintain infrastructure and automation tools using infrastructure-as-code practices",
                "Design and implement CICD pipelines to automate the software delivery process.",
                "Monitor and troubleshoot infrastructure and applications to ensure high availability and performance."
            ]
        },
        {
            "title": "Senior Software Engineer",
            "company": "Strategic Systems International",
            "location": "Lahore, Pakistan",
            "startDate": "March 2021",
            "endDate": "December 2023",
            "description": [
                "Worked on projects of a leading Crypto Data provider \\\"THE TIE INC.\\\" such as \\\"Terminal\\\"",
                "Implemented deployment strategies using AWS Elastic Container Service",
                "Configured and maintained systems that monitored applications and infrastructure.",
                "Maintained metrics visibility using ELK and Prometheus/Grafana to create useful dashboards",
                "Monitored security of all AWS Accounts",
                "Worked with engineering teams to approve SOC2."
            ]
        },
        {
            "title": "Software Engineer",
            "company": "Icommunix Ltd",
            "location": "Lahore, Pakistan",
            "startDate": "November 2019",
            "endDate": "February 2021",
            "description": [
                "Primarily worked as a Cloud Back End Engineer/Solution Architect on Omningage",
                "Provisioned AWS Well-Architected Framework approved Architecture",
                "Deployed the Saas solution app to AWS Marketplace",
                "Mostly worked on AWS Serverless framework, with node.js"
            ]
        }
    ]
    return (
        <div>
            {workExperience.map((job, index) => (
                <div
                    key={index}
                    className=" border border-gray-800 rounded-lg p-6 mb-6"
                >
                    {/* Company & Date Info */}
                    <div className="flex md:justify-between items-center md:flex-row flex-col mb-2">
                        <h3 className="text-gray-300 font-semibold">{job.company}</h3>
                        <span className="text-gray-400 text-sm">{job.location} | {job.startDate} – {job.endDate} </span>
                    </div>

                    {/* Job Title */}
                    <h2 className="md:text-xl text-lg font-bold text-white">{job.title}</h2>

                    {/* Job Description List */}
                    <ul className="list-none mt-3 space-y-2">
                        {job.description.map((desc, index) => (
                            <li key={index} className="text-gray-400 text-sm flex items-start">
                                <span className="mr-2 text-gray-500">•</span> {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default withSectionLayout(WorkExperience, 1);
