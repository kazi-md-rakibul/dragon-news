import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";

const FindUs = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Find Us On</h2>
      <div className="flex flex-col gap-3">
        <a 
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:shadow-md"
        >
          <div className="relative">
            <FaFacebook className="text-3xl text-[#1877F2] transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-400 opacity-20 blur-lg rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Facebook</span>
        </a>

        <a 
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-all duration-300 group border border-gray-100 hover:border-sky-200 hover:shadow-md"
        >
          <div className="relative">
            <TiSocialTwitter className="text-3xl text-[#1DA1F2] transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-sky-400 opacity-20 blur-lg rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <span className="font-medium text-gray-700 group-hover:text-sky-600 transition-colors duration-300">Twitter</span>
        </a>

        <a 
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-all duration-300 group border border-gray-100 hover:border-pink-200 hover:shadow-md"
        >
          <div className="relative">
            <FaInstagram className="text-3xl text-[#E4405F] transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-pink-400 opacity-20 blur-lg rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <span className="font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;