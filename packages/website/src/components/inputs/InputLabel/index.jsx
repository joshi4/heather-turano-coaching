import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../typography";

import "./index.module.scss";

export const InputLabel = ({ label, for: htmlFor, isValid }) => (
  // eslint-disable-next-line
  <label htmlFor={htmlFor} styleName="input-label">
    <Label size="sm" type="input" color={isValid ? "secondary-0" : "invalid-0"}>
      {label}
    </Label>
  </label>
);

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  for: PropTypes.string.isRequired,
  isValid: PropTypes.bool
};

InputLabel.defaultProps = {
  isValid: true
};

export default InputLabel;
