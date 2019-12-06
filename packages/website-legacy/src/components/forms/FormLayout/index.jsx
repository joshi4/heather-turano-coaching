import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const FormLayout = ({ styleType, children }) => (
  <div styleName={`group ${styleType}`}>{children}</div>
);

FormLayout.propTypes = {
  styleType: PropTypes.oneOf(["stacked", "inline"]),
  children: PropTypes.any.isRequired
};

FormLayout.defaultProps = {
  styleType: "stacked"
};

export default FormLayout;
