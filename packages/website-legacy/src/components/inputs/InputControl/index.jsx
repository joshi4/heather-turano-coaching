import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const InputControl = ({ children }) => (
  <div styleName="input-control">{children}</div>
);

InputControl.propTypes = {
  children: PropTypes.any.isRequired
};

export default InputControl;
