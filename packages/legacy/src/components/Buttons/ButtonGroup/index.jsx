import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";

import "./index.module.scss";

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

export default ButtonGroup;
