import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const Button = ({
  // type = 'button', label = '', onClick = () => null
  type,
  label,
  onClick,
}) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  label: '',
  onClick: () => null,
};

export default Button;
