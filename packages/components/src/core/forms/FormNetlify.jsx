import React from "react";
import PropTypes from "prop-types";

import FormHoneypot from "./FormHoneypot";

const FormNetlify = ({ children, name, action }) => (
  <form
    name={name}
    method="POST"
    action={action}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value={name} />
    <FormHoneypot botFieldName="bot-field" />
    {children}
  </form>
);

FormNetlify.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  action: PropTypes.func
};

FormNetlify.defaultProps = {
  action: "/successfully-submitted"
};

export default FormNetlify;
