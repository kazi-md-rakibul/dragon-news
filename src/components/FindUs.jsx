import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3 mt-8">Find Us</h2>
      <div className="join join-vertical w-full *:h-16 *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-sky-500 text-4xl bg-slate-100 p-2 rounded-full mr-1"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <TiSocialTwitter className="text-sky-500 text-4xl bg-slate-100 p-2 rounded-full mr-1"></TiSocialTwitter> Tweeter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-red-500 text-4xl bg-slate-100 p-2 rounded-full mr-1"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
