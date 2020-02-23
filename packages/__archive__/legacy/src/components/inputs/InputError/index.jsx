import React from "react";
import PropTypes from "prop-types";

import { Caption } from "../../typography";

import "./index.module.scss";

export const InputError = ({ message }) => (
  <div styleName="input-error">
    <Caption size="xs" color="invalid-0">
      {message}
    </Caption>
  </div>
);

InputError.propTypes = {
  message: PropTypes.string.isRequired
};

export default InputError;
