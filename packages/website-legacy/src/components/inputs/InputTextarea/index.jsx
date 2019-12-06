import React from "react";
import PropTypes from "prop-types";

import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { InputControl } from "../InputControl";

import "./index.module.scss";

const InputTextarea = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  onBlur,
  isValid,
  isDisabled,
  isReadOnly,
  styleType,
  // isTouched,
  errorMessage
}) => (
  <InputControl>
    {label && <InputLabel label={label} for={name} isValid={isValid} />}
    <div>
      <textarea
        id={name}
        name={name}
        styleName={`input-textarea ${styleType} ${!isValid ? "invalid" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
        readOnly={!onChange || isReadOnly}
      />
    </div>
    {!isValid && errorMessage && (
      <InputError isValid={isValid} message={errorMessage} />
    )}
  </InputControl>
);

InputTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  styleType: PropTypes.oneOf(["primary", "secondary"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool
};

InputTextarea.defaultProps = {
  label: null,
  styleType: "primary",
  value: "",
  onChange: null,
  onBlur: null,
  isValid: true,
  isDisabled: false,
  isReadOnly: false,
  errorMessage: null,
  placeholder: ""
};

export default InputTextarea;
