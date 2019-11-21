import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.styles';

const Input = ({
  // type = 'text',
  // value = '',
  // onChange = () => null,
  // name = '',
  type,
  value,
  onChange,
  name,
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => null,
  name: '',
};

export default Input;
