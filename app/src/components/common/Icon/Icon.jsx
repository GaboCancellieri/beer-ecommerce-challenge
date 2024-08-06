import Image from 'next/image';
import PropTypes from 'prop-types';

/**
 * Icon component to render an SVG icon with fixed width and height.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.iconId - The ID of the icon, used to complete the image src.
 * @param {string} [props.alt] - Alternative text for the icon image.
 * @param {string} [props.className] - Additional CSS classes for custom styling.
 * @param {number} [props.width=24] - The width of the icon.
 * @param {number} [props.height=24] - The height of the icon.
 * @returns {JSX.Element} - The rendered icon component.
 */
function Icon({ iconId, alt = '', className = '', width = 24, height = 24 }) {
  return (
    <Image
      src={`/icons/${iconId}.svg`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Icon;
