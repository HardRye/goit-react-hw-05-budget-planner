import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.styles';

const Input = ({
  type = 'text',
  value = '',
  onChange = () => null,
  name = '',
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
