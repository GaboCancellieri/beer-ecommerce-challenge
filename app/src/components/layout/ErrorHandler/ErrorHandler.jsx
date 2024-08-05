'use client';

import { useEffect } from 'react';

/**
 * Generic error component to display an error message and show an alert.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.error - The error object to display.
 * @returns {JSX.Element} - The rendered component.
 */
export default function ErrorHandler({ error }) {
  useEffect(() => {
    if (error) {
      window.alert(`Something went wrong: ${error}`);
    }
  }, [error]);

  return <div>Something went wrong: {error}</div>;
}
