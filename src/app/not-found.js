// app/not-found.js

import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center text-gray-800">
      <h1 className="text-4xl mb-5">Page Under Construction</h1>
      <p className="text-lg mb-5">We're working hard to bring you this page. Please check back later.</p>
      <Link href="/">
        <p className="text-base text-cyan-400 font-bold underline">Go back to Home</p>
      </Link>
    </div>
  );
};

export default NotFound;