import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const TypColor = ({ color, children }) =>
  color ? <span className={color}>{children}</span> : children;

TypColor.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any.isRequired
};

TypColor.defaultProps = {
  color: null
};
