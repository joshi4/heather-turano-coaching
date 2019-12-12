import React from "react";
import PropTypes from "prop-types";

import "./ButtonGroup.module.scss";

export const ButtonGroup = ({ layout, children }) => (
  <div styleName={`grouping ${layout}`}>{children}</div>
);

ButtonGroup.propTypes = {
  layout: PropTypes.oneOf(["inline", "stacked"]),
  children: PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
  layout: "inline"
};
