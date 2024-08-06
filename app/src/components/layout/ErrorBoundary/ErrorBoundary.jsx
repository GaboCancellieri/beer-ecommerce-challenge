'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Typography } from '@/components/common';

/**
 * Generic error component to display an error message and show an alert.
 *
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components
 * @param {Object} props.error - The error object to display.
 * @returns {JSX.Element} - The rendered component.
 */
function ErrorBoundary({ children, error }) {
  useEffect(() => {
    if (error) {
      window.alert(`Something went wrong: ${error}`);
    }
  }, [error]);

  if (error) {
    return <Typography variant="h4">Something went wrong: {error}</Typography>;
  }

  return children;
}

ErrorBoundary.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorBoundary;
