import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import withSectionLayout from '../hoc/withSectionLayout';
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { BsEnvelopeAt } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { SlGlobe } from 'react-icons/sl';

const ContactInfo = () => {
  const { VITE_REACT_SERVICE_ID, VITE_REACT_TEMPLATE_ID, VITE_REACT_PUBLIC_KEY } = import.meta.env;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showScroll, setShowScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError(false);

    // const serviceID = "service_9r4jnnd"; 
    // const templateID = "template_kfw53p8"; 
    // const publicKey = "3GUBuAjKj03za432R"; 

    try {
      await emailjs.send(VITE_REACT_SERVICE_ID, VITE_REACT_TEMPLATE_ID, formData, VITE_REACT_PUBLIC_KEY);
      setSuccess(true);
      console.log("Form submitted successfully", formData);
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Info:</h3>
          <div className="space-y-6 mt-5">
            <div className="flex items-center gap-3">
              <BsEnvelopeAt className="text-lg text-gray" />
              <a href="mailto:faizanshah801@gmail.com" className="text-gray-400 hover:text-gray-300">
                faizanshah801@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-lg text-gray" />
              <span className="text-gray-400">+923315316001</span>
            </div>
            <div className="flex items-center gap-3">
              <IoLocationOutline className="text-lg text-gray" />
              <span className="text-gray-400">Lahore, Punjab Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <SlGlobe className="text-lg text-gray" />
              <a href="https://shahfaizan.com" className="text-gray-400 hover:text-gray-300">
                shahfaizan.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-6 bg-black text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition"
            >
              {isSending ? "Sending..." : "Send"}
            </button>

            {success && <p className="text-green-400">Message sent successfully!</p>}
            {error && <p className="text-red-400">Failed to send message. Try again.</p>}
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex wrap justify-center gap-10 mt-8">
        <a href="https://github.com/faizaanshah" target="_blank" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500">
          <FaGithub className="text-2xl" /> Github
        </a>
        <a href="https://www.linkedin.com/in/faizans801/" target="_blank" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500">
          <FaLinkedin className="text-2xl" /> Linkedin
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-400 transition-all duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default withSectionLayout(ContactInfo, 5);
