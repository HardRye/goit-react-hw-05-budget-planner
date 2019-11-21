import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './Label.styles';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.string.isRequired,
};

export default Label;
