'use client';
import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

/**
 * ImageWithFallback component to display an image with a fallback option.
 * If the original image fails to load, the fallback image is displayed instead.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.src - The source URL of the original image.
 * @param {string} props.alt - The alt text for the image.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @param {string} [props.className] - Optional CSS class for the image.
 * @param {string} [props.fallbackSrc='/fallback-image.png'] - Optional fallback image URL if the original image fails to load.
 * @returns {JSX.Element} - The rendered image component.
 */
function ImageWithFallback({
  className,
  src,
  alt,
  width,
  height,
  fallbackSrc = '/fallback-image.png'
}) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  fallbackSrc: PropTypes.string
};

export default ImageWithFallback;
