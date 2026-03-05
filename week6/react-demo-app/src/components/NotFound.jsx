import React from 'react';
import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
