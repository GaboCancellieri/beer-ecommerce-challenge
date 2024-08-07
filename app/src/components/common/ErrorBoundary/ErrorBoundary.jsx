'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ImageWithFallback, Typography } from '@/components/common';
import styles from './ErrorBoundary.module.scss';

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

  if (!error) {
    return children;
  }

  return (
    <div className={styles.errorCard}>
      <Typography variant="h2">Oops!</Typography>
      <ImageWithFallback
        src="/oops.png"
        alt="Shrugging shoulders"
        width={300}
        height={250}
        className={styles.shruggingImage}
      />
      <Typography variant="h5">Something went wrong</Typography>
      <Typography variant="p" className={styles.errorMessage}>
        {error}
      </Typography>
    </div>
  );
}

ErrorBoundary.propTypes = {
  error: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
