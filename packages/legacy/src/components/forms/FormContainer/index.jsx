import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

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
