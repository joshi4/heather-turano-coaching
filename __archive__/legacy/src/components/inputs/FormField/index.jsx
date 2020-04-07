import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import { inputComponentMap } from "../utils";

const InputField = ({
  type,
  name,
  placeholder,
  label
  // options,
}) => (
  <Field name={name}>
    {({ field, form: { touched, errors } }) => {
      const InputComponent = inputComponentMap[type];
      const { name: fieldName } = field;
      const derrivedProps = {
        label,
        placeholder,
        isTouched: touched[fieldName],
        errorMessage: errors[fieldName],
        isValid: errors[fieldName]
      };
      return <InputComponent {...field} {...derrivedProps} />;
    }}
  </Field>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "textarea", "email"]).isRequired,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
};

InputField.defaultProps = {
  onChange: null,
  onBlur: null,
  label: null,
  placeholder: ""
};

export default InputField;
