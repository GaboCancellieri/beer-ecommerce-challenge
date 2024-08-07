import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.scss';
import classNames from 'classnames';

const TYPOGRAPHY_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'caption'
];

/**
 * Typography component to handle various text styles using the DM Sans font.
 *
 * @param {Object} props - The component props.
 * @param {string} props.variant - The typography variant (e.g., 'h1', 'title', 'p').
 * @param {string} props.className - Additional CSS classes for custom styling.
 * @param {string} props.children - The text content.
 * @returns {JSX.Element} - The rendered typography component.
 */
function Typography({ variant, className, children }) {
  const Tag = variant;
  return (
    <Tag className={classNames(styles.font, styles[variant], className)}>
      {children}
    </Tag>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(TYPOGRAPHY_VARIANTS).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Typography;
