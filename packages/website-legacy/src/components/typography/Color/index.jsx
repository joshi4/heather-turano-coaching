import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Color = ({ color, children }) =>
  color ? <span className={color}>{children}</span> : children;

Color.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any.isRequired
};

Color.defaultProps = {
  color: null
};

export default Color;
