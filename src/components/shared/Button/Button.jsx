import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
