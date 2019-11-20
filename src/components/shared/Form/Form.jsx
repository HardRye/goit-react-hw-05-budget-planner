import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './Form.styles';

const Form = ({ onSubmit = () => null, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf.isRequired,
};

export default Form;
