import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './Label.styles';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  customStyles: PropTypes.shape.isRequired,
};

export default Label;
