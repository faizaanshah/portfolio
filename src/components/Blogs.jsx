import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withSectionLayout from "../hoc/withSectionLayout";
import blog5 from '../assets/blog5.png';

import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';

const blogPosts = [
  {
    image: blog1,
    title: "Migrating Data from PostgreSQL to Amazon Redshift",
    link: "https://medium.com/@faizanshah801/migrating-data-from-postgresql-to-amazon-redshift-via-aws-dms-5bdbdad27b01",
    description: "There can be multiple ways of moving PostgreSQL databases, but I'll be explaining AWS Database Migration...",
  },
  {
    image: blog2,
    title: "How to Copy SQL Queries response into S3 bucket",
    link: "https://medium.com/@faizanshah801/how-to-copy-a-sql-queries-response-into-s3-bucket-736f9bc56b75",
    description: "This article explains how one can copy some PostgreSQL queries response directly into AWS S3...",
  },
  {
    image: blog3,
    title: "WIFI Icon not showing on Ubuntu 20.04",
    link: "https://medium.com/@faizanshah801/wifi-icon-not-showing-on-ubuntu-20-04-and-cannot-connect-to-network-a271c167bd8d",
    description: "With a recent update, I found out that I no longer had a WIFI option in my networks...",
  },
  {
    image: blog4,
    title: "Setting up Jenkins Server on AWS EC2 with SSL",
    link: "https://medium.com/@faizanshah801/setting-up-jenkins-server-on-aws-ec2-with-ssl-7822e9941ee9",
    description: "In order to set up a Jenkins server over AWS, you need to have an AWS account...",
  },
  {
    image: blog5,
    title: "Updating AWS ECS Task Definitions and Services via Ansible",
    link: "https://medium.com/@faizanshah801/updating-aws-ecs-taskdefintions-and-services-via-ansible-8f9b41c9de5e",
    description: "Imagine having an app deployed on AWS ECS and needing to update environment variables...",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogPosts);
  const { VITE_REACT_MEDIUM_URL } = import.meta.env;

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      // Check if the internet is available
      if (!navigator.onLine) {
        console.log("No internet connection, using local data.");
        return; // Use default local blogPosts
      }

      try {
        const response = await fetch(VITE_REACT_MEDIUM_URL);
        const data = await response.json();

        if (data.status === "ok") {
          const posts = data.items.map((item) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.description, "text/html");
            const imgTag = doc.querySelector("img");
            const thumbnail = imgTag ? imgTag.src : item.thumbnail || blog5;

            const textContent = doc.body.textContent || "";
            const shortDescription = textContent.split("\n").slice(0, 3).join(" ").substring(0, 150) + "...";

            return {
              title: item.title,
              description: shortDescription,
              link: item.link,
              image: thumbnail,
            };
          });

          setBlogs(posts);
        }
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    fetchMediumBlogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto ">
      <Slider {...settings}>
        {blogs.map((post, index) => (
          <div key={index} className="p-4">
            <div className="border border-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt="Blog" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{post.description}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 text-sm hover:cursor-pointer text-blue-400 hover:text-blue-300 transition">
                    Read more →
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default withSectionLayout(Blogs, 4);
