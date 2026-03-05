import React from 'react';
import { useRouteError } from 'react-router';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg">
        {error?.status && `${error.status} - `}
        {error?.statusText || error?.message || 'An unexpected error occurred.'}
      </p>
    </div>
  );
}

export default ErrorPage;
