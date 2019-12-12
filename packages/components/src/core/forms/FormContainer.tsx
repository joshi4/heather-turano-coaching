import React from "react";
import PropTypes from "prop-types";

import "./FormContainer.module";

const FormConatiner = ({ styleType, children }) => (
  <div styleName={styleType}>{children}</div>
);

FormConatiner.propTypes = {
  styleType: PropTypes.oneOf(["standalone"]),
  children: PropTypes.any.isRequired
};

FormConatiner.defaultProps = {
  styleType: "standalone"
};

export default FormConatiner;
