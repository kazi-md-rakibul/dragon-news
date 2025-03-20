import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaHome, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl w-full space-y-8 text-center p-8">
        {/* Minimal Error Icon */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-red-50 rounded-full blur-xl" />
          </div>
          <FaExclamationTriangle className="text-6xl text-red-400 mx-auto relative z-10" />
        </div>

        {/* Clean Error Content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-zinc-900">
            {error?.status || '404'}
          </h1>
          <h2 className="text-xl font-medium text-zinc-600">
            {error?.statusText || 'Page Not Found'}
          </h2>
          <p className="text-zinc-500 max-w-sm mx-auto">
            We couldn't find the page you're looking for. Please check the URL or return home.
          </p>

          {/* Minimal Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors duration-200"
            >
              <FaHome className="text-sm" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-200 text-zinc-600 rounded-md hover:bg-zinc-50 transition-colors duration-200"
            >
              <FaArrowLeft className="text-sm" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
        </div>

        {/* Minimal Support Link */}
        <div className="pt-12">
          <a 
            href="mailto:support@dragonnews.com" 
            className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;