import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'warning',
  'success',
  'info',
  'transparent',
  'light',
  'dark'
];

/**
 * Button component to render a styled button element.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.className] - Additional CSS classes for custom styling.
 * @param {string} [props.size] - The size of the button. One of 'small', 'large'.
 * @param {function} [props.onClick] - The function to be called when the button is clicked.
 * @param {string} [props.variant] - The variant style of the button. One of 'primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'info', 'transparent'.
 * @param {boolean} [props.outline] - Whether the button should have an outline style.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @returns {JSX.Element} - The rendered button component.
 */
function Button({
  children,
  className,
  size,
  onClick,
  variant,
  outline,
  rounded,
  disabled
}) {
  return (
    <button
      className={classNames(
        className,
        styles.button,
        styles[size],
        styles[variant],
        {
          [styles.outline]: outline,
          [styles.rounded]: rounded
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  outline: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
