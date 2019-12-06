import React from "react";
import PropTypes from "prop-types";

import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { InputControl } from "../InputControl";

import "./index.module.scss";

const InputText = ({
  name,
  value,
  label,
  type,
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
    <input
      id={name}
      name={name}
      type={type}
      styleName={`input-${type} ${styleType} ${!isValid ? "invalid" : ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={isDisabled}
      readOnly={!onChange || isReadOnly}
    />
    {!isValid && errorMessage && (
      <InputError isValid={isValid} message={errorMessage} />
    )}
  </InputControl>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  styleType: PropTypes.oneOf(["primary", "secondary"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string
};

InputText.defaultProps = {
  label: null,
  type: "text",
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

export default InputText;
