import React from "react";
import PropTypes from "prop-types";

const FormHoneypot = ({ botFieldName }) => (
  <p style={{ display: "none" }}>
    <label htmlFor={botFieldName}>
      Don’t fill this out if you&apos;re human:{" "}
      <input id={botFieldName} name={botFieldName} />
    </label>
  </p>
);

FormHoneypot.propTypes = {
  botFieldName: PropTypes.string
};

FormHoneypot.defaultProps = {
  botFieldName: "bot-field"
};

export default FormHoneypot;
